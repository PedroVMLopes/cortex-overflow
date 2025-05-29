import { supabase } from "@/lib/supabase";
import { User } from "@/types/user";

export async function fetchUsers(): Promise<User[]> {
    const { data, error } = await supabase
            .from('users')
            .select('*')
            .order('created_at', { ascending: false });
    
    if (error) {
        console.error('Erro ao buscar usuários: ', error);
        return [];
    }

    return data || [];
}