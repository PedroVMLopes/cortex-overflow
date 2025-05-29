"use client"

import { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types/user";
import { fetchCurrentUser } from "@/services/userServices";

interface UserContextType {
    userData: User | null;
    refreshUserData: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [ userData, setUserData ] = useState<User | null>(null);

    const refreshUserData = async () => {
        const user = await fetchCurrentUser();
        setUserData(user);
    }

    useEffect(() => {
        refreshUserData();
    }, [])

    return (
        <UserContext.Provider value={{ refreshUserData, userData }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    return context;
}