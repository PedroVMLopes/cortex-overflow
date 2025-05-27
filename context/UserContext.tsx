"use client"

import { createContext, useContext, useState } from "react";
import { User } from "@/types/user";

interface UserContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [ user, setUser ] = useState<User>({
        name: "Pedro",
        silver_amount: 0,
        gold_amount: 0,
        gem_amount: 0,
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    return context;
}