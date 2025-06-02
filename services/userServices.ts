import { supabase } from "@/lib/supabase";
import { AppUser } from "@/types/AppUser";

export async function fetchCurrentUser(): Promise<AppUser | null> {
    let userData: AppUser;
    const { data: { user: authUser }, error } = await supabase.auth.getUser();
    
    if (error || !authUser) return null;

    const { data, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('auth_user_id', authUser.id)
        .single();

    if (!userError && data) {
        userData = data;
    } else {
        const { data: newUser } = await supabase
          .from('users')
          .insert({
            auth_user_id: authUser.id,
            name: authUser.user_metadata.full_name || 'Sem Nome',
            silver_amount: 0,
            gold_amount: 0,
            gem_amount: 0,
          })
          .select()
          .single();

        userData = newUser;
    }

    return userData;
}