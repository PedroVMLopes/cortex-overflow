import { supabase } from "@/lib/supabase";
import { User } from "@/types/user";

export async function fetchCurrentUser(): Promise<User | null> {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', 1)
        .single()

    if (error) {
        console.error('Erro ao buscar usuário: ', error.message);
        return null;
    }

    return data
}