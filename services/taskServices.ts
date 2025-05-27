import { supabase } from "@/lib/supabase";
import { Task } from "@/types/task";

export async function fetchTasks(): Promise<Task[]> {
    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Erro ao buscar tasks: ', error);
        return [];
    }

    return data || [];
}