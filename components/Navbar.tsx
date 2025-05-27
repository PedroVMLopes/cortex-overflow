"use client"

import { GiCyborgFace, GiCyberEye, GiCrownedSkull, GiOpenTreasureChest, GiCrownCoin, GiGems } from "react-icons/gi";
import Link from "next/link";
import { useUser } from "../context/UserContext";

export const Navbar = () => {

    const { user } = useUser();

    return (
        <div className="fixed bottom-0 w-full font-mono text-emerald-500">
            <div className="grid grid-cols-3 gap-0.5 items-center text-center border border-b-0 border-emerald-900">

                <div className="flex flex-col justify-center items-center py-1">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiCrownCoin className="text-gray-400"/>
                        <p>{user.silver_amount}</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center border-r border-l border-emerald-900 py-1">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiCrownCoin className="text-amber-300"/>
                        <p>{user.gold_amount}</p>
                    </div>
                </div>
                    
                <div className="flex flex-col justify-center items-center py-1">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiGems className="text-blue-400"/>
                        <p>{user.gem_amount}</p>
                    </div>
                </div>
                    
            </div>
            <div className="grid grid-cols-4 grid-rows-1 items-center text-center text-2xl border border-emerald-900 py-2">
                <div className="flex justify-center">
                    <Link href="/"><GiCyberEye /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/LegacyObjectives"><GiCrownedSkull /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/Store"><GiOpenTreasureChest /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/personalStats"><GiCyborgFace /></Link>
                </div>
            </div>
        </div>
    )
}