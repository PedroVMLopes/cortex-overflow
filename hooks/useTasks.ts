import { useEffect, useState } from "react";
import { deleteTask, fetchTasks, updateTaskRewardOnDB, updateCompletionOnBD } from "@/services/taskServices";
import { Task } from "@/types/task";
import { useDebouncedCallback } from "use-debounce";


export function useTasks() {
    const [ tasks, setTasks ] = useState<Task[]>([]);
    const [ loading, setLoading ] = useState(true);

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


    async function toggleTaskCompletion(id: number, userId: number, completionStatus: boolean) {
        const task = tasks.find(t => t.id === id);
        if (!task) return

        const newStatus = !completionStatus;

        try {
            await updateCompletionOnBD(id, 1, newStatus)
        } catch (error) {
            console.error('Erro ao mudar o estado de finalização da tarefa: ', error);
            return;
        }

        setTasks(prev => 
            prev.map(t => 
                t.id === id ? {...t, is_completed: newStatus} : t
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