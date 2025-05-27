import { useEffect, useState } from "react";
import { fetchTasks } from "@/services/taskServices";
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

    return { tasks, loading, setTasks };
}