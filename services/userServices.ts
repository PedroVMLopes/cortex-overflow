import { supabase } from "@/lib/supabase";
import { AppUser } from "@/types/AppUser";

const DEFAULT_ATTRIBUTES = ["STR", "CON", "CHA", "DEX", "WIZ", "INT"];

export async function fetchCurrentUser(): Promise<AppUser | null> {
  const { data: { user: authUser }, error } = await supabase.auth.getUser();
  
  if (error || !authUser) return null;

  const { data, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('auth_user_id', authUser.id)
      .single();

  // If there is data on that auth_user_id returns that data
  if (!userError && data) {
      return data;
  } else {

    // Else creates the new user on DB
    const { data: newUser } = await supabase
      .from('users')
      .upsert({
        auth_user_id: authUser.id,
        name: authUser.user_metadata.full_name || 'Usuário',
        silver_amount: 0,
        gold_amount: 0,
        gem_amount: 0,
        account_level: 0,
      }, { onConflict: 'auth_user_id'})
      .select()
      .single();

    // Search the DB for attributes with the user_id
    const { data: existingAttributes } = await supabase
      .from('user_attributes')
      .select('id')
      .eq('user_id', newUser.id);
    
    // Checks if there are no attributes created with that user_id before creating them
    if (existingAttributes?.length ===  0) {
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
    }

    return newUser;
  }
}

export async function updateUserCurrency(newValue: number, currency: 'silver_amount' | 'gold_amount' | 'gem_amount', userId: number) {
  const { error } = await supabase
    .from('users')
    .update({ [currency]: newValue })
    .eq('id', userId)

  if (error) console.error("Error on updating user currency: ", error.message);
}