'use client'

import { useEffect, useState } from "react";
import Auth from "@/components/Auth";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { fetchCurrentUser } from "@/services/userServices"; 
import { useUserContext } from "@/context/UserContext";

export default function Home() {
  const user = fetchCurrentUser();
  const router = useRouter();
  const { userData } = useUserContext();

  useEffect(() => {
    const checkUser = async () => {
      if (await user) {
        router.push('/MainTasks')
      }
    }
    checkUser();
    
  }, [user])

  return (
    <div className="font-mono text-emerald-500 m-2">
      {/* Top Content */}
      <div className="fixed top-0 left-0 w-full px-2 z-10 backdrop-blur">
        <p className="font-bold">BEM VINDO, USUÁRIO!</p>
        <p className="text-xs opacity-90 flex flex-row items-center text-emerald-50"> <FaAngleRight /> Cortex Overflow Mk.2</p>
        <div className="h-0.5 w-full bg-emerald-800 my-2"></div>
      </div>

      <div className="h-[90vh] flex flex-col items-center justify-center">
        {!userData && <Auth />}
      </div>

    </div>
  );
}
