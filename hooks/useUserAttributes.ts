import { useUserContext } from "@/context/UserContext";
import { fetchUserAttributes } from "@/services/attributeServices";
import { userAttribute } from "@/types/userAttributes";
import { useEffect, useState } from "react";

export function useUserAttributes() {
    const [ userAttributes, setUserAttributes ] = useState<userAttribute[]>([]);
    const { userData } = useUserContext();

    useEffect(() => {
        async function loadUserAttributes() {
            const data = await fetchUserAttributes(userData?.id);
            setUserAttributes(data);
        }
        loadUserAttributes()
    }, [])

    return  userAttributes;
}