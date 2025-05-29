import { useEffect, useState } from "react";
import { deleteTask, fetchTasks, updateTaskRewardOnDB, updateCompletionOnDB, giveTaskRewardToUser } from "@/services/taskServices";
import { Task } from "@/types/task";
import { useDebouncedCallback } from "use-debounce";
import { useUserContext } from "@/context/UserContext";
import { User } from "@/types/user";


export function useTasks() {
    const [ tasks, setTasks ] = useState<Task[]>([]);
    const [ loading, setLoading ] = useState(true);
    const { userData, refreshUserData } = useUserContext();

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
            await deleteTask(id, 1);
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
        updateTaskRewardOnDB(id, 1, rewardType, newValue);
    }, 500);

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
        userData: User,
        refreshUserData: () => void
    ) {
        const prevGoldAmount = userData?.gold_amount || 0;
        const prevSilverAmount = userData?.silver_amount || 0;
        
        await giveTaskRewardToUser(id, userId, (prevSilverAmount + silver_reward), (prevGoldAmount + gold_reward))
        refreshUserData();
    }


    async function toggleTaskCompletion(
        id: number,
        userId: number,
        silver_reward: number,
        gold_reward: number,
        completionStatus: boolean,
        wasRewardGiven: boolean,
        userData: User,
        refreshUserData: () => void
    ) {
        const task = tasks.find(t => t.id === id);
        if (!task) return

        if (!wasRewardGiven) {
            await giveTaskReward(id, userId, silver_reward, gold_reward, userData, refreshUserData);
        }

        const newStatus = !completionStatus;

        try {
            await updateCompletionOnDB(id, 1, newStatus, true)
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


    return { 
        tasks, 
        loading, 
        setTasks, 
        removeTaskById,
        updateTaskReward,
        toggleTaskCompletion
    };

}
