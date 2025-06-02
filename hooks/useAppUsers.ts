import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { AppUser } from '@/types/AppUser';

export function useAppUser() {
  const [user, setUser] = useState<AppUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user: authUser }, error } = await supabase.auth.getUser();
      if (error || !authUser) {
        setUser(null);
        return;
      }

      const { data, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('auth_user_id', authUser.id)
        .single();

      if (!userError && data) {
        setUser(data);
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

        setUser(newUser);
      }

    };

    fetchUser();
  }, []);

  return user;
}
