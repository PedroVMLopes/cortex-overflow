import { supabase } from "@/lib/supabase";
import { Task } from "@/types/task";

export async function fetchTasks(): Promise<Task[]> {
    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Erro ao buscar tasks: ', error);
        return [];
    }

    return data || [];
}

export async function createTask(name: string, userId: number | undefined, isDaily: boolean): Promise<Task> {
    const { data, error } = await supabase
        .from('tasks')
        .insert({
            name,
            user_id: userId,
            attribute: '',
            silver_reward: 0,
            gold_reward: 0,
            is_completed: false,
            reward_given: false,
            is_daily: isDaily,
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

export async function updateTaskRewardOnDB(id: number, userId: number, rewardType: 'silver_reward' | 'gold_reward', newValue: number) {
    const { error } = await supabase
        .from('tasks')
        .update({ [rewardType]: newValue })
        .eq('id', id);

    if (error) {
        console.error("Erro ao criar task no Supabase: ", error.message);
        throw error;
    }
}

export async function updateCompletionOnDB(id: number, userId: number, completionStatus: boolean, wasRewardGiven: boolean) {
    const { error } = await supabase
        .from('tasks')
        .update({ 
            is_completed: completionStatus,
            reward_given: wasRewardGiven
        })
        .eq('id', id);

    if( error ) {
        console.error("Erro ao mudar o status de finalização da tarefa: ", error.message);
        throw error;
    }
}

export async function giveTaskRewardToUser(userId: number, silverReward: number, goldReward: number) {
    const { error } = await supabase
        .from('users')
        .update({ 
            silver_amount: silverReward, 
            gold_amount: goldReward 
        })
        .eq('id', userId);

    if( error ) {
        console.error("Erro ao atualizar a recompensa da tarefa")
    }
}

export async function updateTaskAttributesOnDB(id: number, userId: number, attributeName: string) {
    const { error } = await supabase
        .from('tasks')
        .update({ attribute: attributeName})
        .eq('id', id)
        .eq('user_id', userId);

    if( error ) {
        console.error("Erro ao mudar o status de finalização da tarefa: ", error.message);
        throw error;
    }
}

export async function updateTaskExperience(id: number, userId: number, newXpReward: number) {
    const { error } = await supabase
     .from('tasks')
     .update({xp_reward: newXpReward})
     .eq('id', id)
     .eq('user_id', userId);

    if (error) {
        console.error("Error altering the task XP reward: ", error.message);
        throw error;
    }
}