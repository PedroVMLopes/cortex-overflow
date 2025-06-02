import { supabase } from "@/lib/supabase";
import { AppUser } from "@/types/AppUser";

const DEFAULT_ATTRIBUTES = ["STR", "CON", "CHA", "DEX", "WIZ", "INT"];

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
      // Creates the new user on DB
        const { data: newUser } = await supabase
          .from('users')
          .insert({
            auth_user_id: authUser.id,
            name: authUser.user_metadata.full_name || 'Usuário',
            silver_amount: 0,
            gold_amount: 0,
            gem_amount: 0,
          })
          .select()
          .single();

          // Creates the attributes on DB
          if (newUser) {
            const attributesToInsert = DEFAULT_ATTRIBUTES.map((att) => ({
              user_id: newUser.id,
              attribute: att,
              level: 0,
              xp: 0,
            }))

            const { error: attError } = await supabase
              .from('user_attributes')
              .insert(attributesToInsert);

            if (attError) {console.error("Erro ao inserir os atributos do usuário: ", attError.message)}
          }

        userData = newUser;
    }

    return userData;
}