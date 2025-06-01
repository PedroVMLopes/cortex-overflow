"use client"

import { GiCrownCoin, GiGems, GiSixEyes, GiMaceHead, GiBrickPile, GiBrainTentacle, GiCrownOfThorns } from "react-icons/gi";
import Link from "next/link";
import { useUserContext } from "../context/UserContext";

export const Navbar = () => {

    const { userData } = useUserContext();

    return (
        <div className="fixed bottom-0 w-full font-mono text-emerald-600 z-100">
            <div className="grid grid-cols-3 gap-0.5 items-center text-center border border-b-0 bg-black border-emerald-900">

                <div className="flex flex-col justify-center items-center py-1">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiCrownCoin className="text-gray-400"/>
                        <p className="text-base font-bold">{userData?.silver_amount}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center border-r border-l border-emerald-900 py-1">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiCrownCoin className="text-amber-300"/>
                        <p className="text-base font-bold">{userData?.gold_amount}</p>
                    </div>
                </div>
                    
                <div className="flex flex-col justify-center items-center py-1">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiGems className="text-blue-400"/>
                        <p className="text-base font-bold">{userData?.gem_amount}</p>
                    </div>
                </div>
                    
            </div>
            <div className="grid grid-cols-5 grid-rows-1 items-center text-center text-3xl border bg-black border-emerald-900 py-2 text-emerald-300">
                <div className="flex justify-center">
                    <Link href="/"><GiSixEyes /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/DailyTasks"><GiCrownOfThorns /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/LegacyObjectives"><GiMaceHead /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/Store"><GiBrickPile /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/personalStats"><GiBrainTentacle /></Link>
                </div>
            </div>
        </div>
    )
}