'use client'
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Button from "./KeyboardButton";
import { BiSolidLogOut } from "react-icons/bi";
import { useUserContext } from "@/context/UserContext";

export async function logoutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) console.log("Erro ao fazer logout: ", error.message);
}

export default function LogoutButton() {
    const router = useRouter();
    const { refreshUserData } = useUserContext()

    const handleLogout = async () => {
        await logoutUser();
        router.push('/');
        refreshUserData();
    }

    return (
        <Button
            className="gap-1 border-b-red-900 border-r-red-950 border-l-red-900 border-t-red-800 shadow-red-800 bg-gradient-to-tr from-red-900 to-red-400/30 backdrop-blur-3xl text-red-100"
            onClick={handleLogout}
            >
            Logout <BiSolidLogOut />
        </Button>
    )
}