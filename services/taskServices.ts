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

export async function createTask(name: string, userId: number): Promise<Task> {
    const { data, error } = await supabase
        .from('tasks')
        .insert({
            name,
            user_id: userId,
            attribute: '',
            silver_reward: 0,
            gold_reward: 0,
            is_completed: false,
            reward_given: false
        })
        .select()
        .single();

    if (error) {
        console.error("Erro ao criar task: ", error.message);
        throw error;
    }

    return data as Task;
}

export async function deleteTask(id: number, userId: number){
    const { error } = await supabase
     .from('tasks')
     .delete()
     .eq('id', id);

    if (error) throw new Error(error.message);
}