import { supabase } from "@/lib/supabase";
import { userAttribute } from "@/types/userAttributes";

export async function fetchUserAttributes(userId: number | undefined): Promise<userAttribute[]>{

    if (userId === undefined) { return [] }

    const { data, error } = await supabase
        .from('user_attributes')
        .select('*')
        .eq('user_id', userId)

    if (error) console.error("Error fetching attributes on DB: ", error.message)
    
    return data || [];
}

export async function updateUserAttribute(attribute: string, userID: number, attributeLevel: number, attributeXp: number) {
    console.log("attribute: ", attribute )
    console.log("userID: ", userID )
    console.log("attributeLevel: ", attributeLevel )
    console.log("attributeXp: ", attributeXp )
    const { error } = await supabase
        .from('user_attributes')
        .update({
            level: attributeLevel,
            xp: attributeXp
        })
        .eq('attribute', attribute)
        .eq('user_id', userID);

    if(error) {
        console.error("Erro ao coletar os dados de user_attribute: ", error.message);
        throw error;
    }
}