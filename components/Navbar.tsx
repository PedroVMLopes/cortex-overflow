"use client"

import { GiCrownCoin, GiGems, GiSixEyes, GiMaceHead, GiBrickPile, GiBrainTentacle, GiCrownOfThorns } from "react-icons/gi";
import Link from "next/link";
import { useUserContext } from "../context/UserContext";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const { userData } = useUserContext();
    const pathname = usePathname();

    const buttonStyle = (route: string) =>
        pathname === route
            ? "text-emerald-100 bg-emerald-700"
            : "text-emerald-300 hover:bg-emerald-800"
    

    return (
        <div className="fixed bottom-0 w-full font-mono text-emerald-600 z-100">
            <div className="flex flex-row justify-end text-center">

                <div className="flex flex-col justify-center items-center p-1 px-2 bg-black border border-r-0 border-b-0 border-emerald-900">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiCrownCoin className="text-gray-400"/>
                        <p className="text-base font-bold">{userData?.silver_amount}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center p-1 px-2 bg-black border border-x-0 border-b-0 border-emerald-900">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiCrownCoin className="text-amber-300"/>
                        <p className="text-base font-bold">{userData?.gold_amount}</p>
                    </div>
                </div>
                    
                <div className="flex flex-col justify-center items-center p-1 px-2 bg-black border border-l-0 border-b-0 border-emerald-900">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiGems className="text-blue-400"/>
                        <p className="text-base font-bold">{userData?.gem_amount}</p>
                    </div>
                </div>
                    
            </div>
            <div className="grid grid-cols-5 grid-rows-1 items-center text-center text-3xl border bg-black border-emerald-900 text-emerald-300">
                <Link href="/MainTasks" className={`flex justify-center py-2 ${buttonStyle("/MainTasks")}`}><GiSixEyes /></Link>
                <Link href="/DailyTasks" className={`flex justify-center py-2 ${buttonStyle("/DailyTasks")}`}><GiCrownOfThorns /></Link>
                <Link href="/LegacyObjectives" className={`flex justify-center py-2 ${buttonStyle("/LegacyObjectives")}`}><GiMaceHead /></Link>
                <Link href="/Store" className={`flex justify-center py-2 ${buttonStyle("/Store")}`}><GiBrickPile /></Link>
                <Link href="/personalStats" className={`flex justify-center py-2 ${buttonStyle("/personalStats")}`}><GiBrainTentacle /></Link>
            </div>
        </div>
    )
}