'use client'

import { useEffect, useState } from "react";
import Auth from "@/components/Auth";
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppUser } from "@/hooks/useAppUsers";

export default function Home() {
  const [ loading, setLoading ] = useState(true);
  const user = useAppUser();
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        router.push('/MainTasks')
      }
      setLoading(false);
    }
    checkUser();
  }, [user])

  if (loading) return <p>Loading...</p>

  return (
    <div className="font-mono text-emerald-500 m-2">
      {/* Top Content */}
      <div className="fixed top-0 left-0 w-full px-2 z-10 backdrop-blur">
        <p className="font-bold">BEM VINDO, USUÁRIO!</p>
        <p className="text-xs opacity-90 flex flex-row items-center text-emerald-50"> <FaAngleRight /> Cortex Overflow Mk.2</p>
        <div className="h-0.5 w-full bg-emerald-800 my-2"></div>
      </div>

      <div className="h-[90vh] flex flex-col items-center justify-center">
        {user === null && <Auth />}
      </div>

    </div>
  );
}
