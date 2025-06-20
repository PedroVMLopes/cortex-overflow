import { useUserContext } from "@/context/UserContext";
import { fetchUserAttributes } from "@/services/attributeServices";
import { userAttribute } from "@/types/userAttributes";
import { useEffect, useState } from "react";

export function useUserAttributes() {
    const [ userAttributes, setUserAttributes ] = useState<userAttribute[]>([]);
    const { userData } = useUserContext();
    const [ loading, setLoading ] = useState(true);

    // Waits until there is a userData to call the database
    useEffect(() => {
        if (!userData?.id) return;

        async function loadUserAttributes() {
            const data = await fetchUserAttributes(userData?.id);
            setUserAttributes(data);
            setLoading(false);
        }

        loadUserAttributes()
    }, [userData?.id])

    async function getSingleAttributeFromUser(att: string) {
        return userAttributes.find(a => a.attribute === att );
    }

    return  { 
        userAttributes, 
        loading,
        getSingleAttributeFromUser,
    };
}