import { useEffect, useState } from "react";
import { 
    deleteTask, 
    fetchTasks, 
    updateTaskRewardOnDB, 
    updateCompletionOnDB, 
    giveTaskRewardToUser, 
    updateTaskAttributesOnDB,
    updateTaskExperience,
} from "@/services/taskServices";
import { Task } from "@/types/task";
import { useDebouncedCallback } from "use-debounce";
import { useUserContext } from "@/context/UserContext";
import { AppUser } from "@/types/AppUser";
import { updateUserAttribute } from "@/services/attributeServices";
import { useUserAttributes } from "./useUserAttributes";
import { updateUserCurrency } from "@/services/userServices";


export function useTasks() {
    const [ tasks, setTasks ] = useState<Task[]>([]);
    const [ loading, setLoading ] = useState(true);
    const { userData, refreshUserData } = useUserContext();
    const { getSingleAttributeFromUser } = useUserAttributes();

    useEffect(() => {
        async function loadTasks() {
            setLoading(true);
            const data = await fetchTasks();
            setTasks(data);
            setLoading(false);
        }

        loadTasks();
    }, []);


    // Calls the function that removes the task in the DB then remove the taks locally
    async function removeTaskById(id: number, userId: number) {
        try {
            await deleteTask(id, userId);
            setTasks(prev => prev.filter(task => task.id !== id));
        } catch (err) {
            console.error("Erro ao deletar a task: ", err);
            throw err;
        }
    }


    // Delays the call to the database on reward update
    const debouncedUpdate = useDebouncedCallback((
        id: number,
        userId: number,
        rewardType: 'silver_reward' | 'gold_reward',
        newValue: number
    ) => {
        updateTaskRewardOnDB(id, userId, rewardType, newValue);
    }, 2000);

    async function updateTaskReward(id: number, userId: number, rewardType: 'silver_reward' | 'gold_reward', operation: 'increase' | 'decrease') {
        const task = tasks.find(t => t.id === id);
        if (!task) return;
        
        // Logic to update the reward to the new one
        const currentValue = task[rewardType] ?? 0;
        const delta = operation === 'increase' ? 1 : -1;
        const newValue = Math.max(0, currentValue + delta);
        
        // Calls the function that updates it on the DB
        try {
            debouncedUpdate(id, userId, rewardType, newValue);
        } catch (error) {
            console.error('Erro ao atualizar recompensa: ', error);
            return;
        }

        // Updates the state with the new value
        setTasks(prev => 
            prev.map(t =>
                t.id === id ? {...t, [rewardType]: newValue} : t
            )
        );
    }


    // Adds the task reward to the user when completed
    // Is only called if the *wasRewardGiven* is false
    async function giveTaskReward(
        id: number, 
        userId: number, 
        silver_reward: number, 
        gold_reward: number,
        userData: AppUser,
        refreshUserData: () => void
    ) {
        const prevGoldAmount = userData?.gold_amount || 0;
        const prevSilverAmount = userData?.silver_amount || 0;
        
        await giveTaskRewardToUser(userId, (prevSilverAmount + silver_reward), (prevGoldAmount + gold_reward))
        refreshUserData();
    }


    async function toggleTaskAttribute(id: number, userId: number, attributeName: string) {
        const task = tasks.find(t => t.id === id)
        if (!task) return

        try {
            await updateTaskAttributesOnDB(id, userId, attributeName)
        } catch (error) {
            console.error('Erro ao mudar o atributo da task: ', error);
            return;
        }

        setTasks(prev => 
            prev.map(t => 
                t.id === id ? {...t, attribute: attributeName} : t
            )
        );
    }


    async function giveTaskExperienceReward(attributeName: string, userId: number, xpReward: number) {
        const attribute = await getSingleAttributeFromUser(attributeName);

        if (attribute) {
            let level = attribute.level;

            let newXp = attribute.xp + xpReward;

            while ( newXp >= 100 ) {
                newXp -= 100;
                level += 1;
            }

            await updateUserAttribute(attributeName, userId, level, newXp)
        };
    }


    async function toggleTaskCompletion(
        id: number,
        userId: number,
        silver_reward: number,
        gold_reward: number,
        completionStatus: boolean,
        wasRewardGiven: boolean,
        userData: AppUser,
        refreshUserData: () => void,
        xpReward: number,
        attribute?: string
    ) {
        const task = tasks.find(t => t.id === id);
        if (!task) return
        
        if (!wasRewardGiven) {
            await giveTaskReward(id, userId, silver_reward, gold_reward, userData, refreshUserData);
            if(attribute) await giveTaskExperienceReward(attribute, userId, xpReward);
        }

        const newStatus = !completionStatus;

        try {
            await updateCompletionOnDB(id, userId, newStatus, true)
        } catch (error) {
            console.error('Erro ao mudar o estado de finalização da tarefa: ', error);
            return;
        }

        setTasks(prev => 
            prev.map(t => 
                t.id === id ? { ...t, is_completed: newStatus, reward_given: true } : t
            )
        )
    }

    async function implementChipInTask(selectedTaskId: number | null, price: number, newXp: number) {
        if (!userData) {
            alert("Erro: dados do usuário não disponíveis.");
            return;
        }

        if (selectedTaskId === null) {
            alert("Selecione uma missão antes de aplicar o chip.");
            return;
        }

        const userGems = userData.gem_amount;

        if (price > userGems) {
            alert("Gemas insuficientes.");
            return;
        }

        try {
            await updateTaskExperience(selectedTaskId, userData.id, newXp);

            const newUserGems = userGems - price;
            await updateUserCurrency(newUserGems, 'gem_amount', userData.id);

            await refreshUserData();
            alert("Chip implementado com sucesso.");
        } catch (error) {
            console.error("Erro ao aplicar o chip na tarefa:", error);
            alert("Ocorreu um erro ao aplicar o chip. Tente novamente.");
        }
    }

    async function resetTaskRewards(selectedTaskId: number, userId: number) {
        if ( userId ) {
            updateCompletionOnDB(selectedTaskId, userId, false, false)
        }
    }

    return { 
        tasks, 
        loading, 
        setTasks, 
        removeTaskById,
        updateTaskReward,
        toggleTaskCompletion,
        toggleTaskAttribute,
        implementChipInTask,
        resetTaskRewards,
    };

}
