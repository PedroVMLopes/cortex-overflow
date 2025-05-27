import { useEffect, useState } from "react";
import { deleteTask, fetchTasks } from "@/services/taskServices";
import { Task } from "@/types/task";

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

    // Function to delete tasks locally
    async function removeTaskById(id: number, userId: number) {
        try {
            await deleteTask(id, 1);
            setTasks(prev => prev.filter(task => task.id !== id));
        } catch (err) {
            console.error("Erro ao deletar a task: ", err);
            throw err;
        }
    }

    return { 
        tasks, 
        loading, 
        setTasks, 
        removeTaskById 
    };

}