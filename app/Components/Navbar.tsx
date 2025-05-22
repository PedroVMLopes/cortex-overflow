import { GiCyborgFace, GiCyberEye, GiCrownedSkull, GiOpenTreasureChest, GiCrownCoin, GiGems } from "react-icons/gi";
import Link from "next/link";

export default function Navbar():any {

    return (
        <div className="fixed bottom-0 pb-2 p-2 w-full font-mono text-emerald-500">
            <div className="grid grid-cols-3 items-center text-center py-1.5 border bg-emerald-950 border-emerald-900">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiCrownCoin className="text-gray-400"/>
                        <p>10</p>
                    </div>
                    <p className="text-xs opacity-60">SILVER</p>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiCrownCoin className="text-amber-300"/>
                        <p>10</p>
                    </div>
                    <p className="text-xs opacity-60">GOLD</p>
                </div>
                    
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiGems className="text-blue-400"/>
                        <p>10</p>
                    </div>
                    <p className="text-xs opacity-60">GEMS</p>
                </div>
                    
            </div>
            <div className="grid grid-cols-4 grid-rows-1 items-center text-center text-2xl bg-emerald-950 border border-emerald-900 py-2">
                <div className="flex justify-center">
                    <Link href="/"><GiCyberEye className="" /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/LegacyObjectives"><GiCrownedSkull className="" /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/Store"><GiOpenTreasureChest className="" /></Link>
                </div>
                <div className="flex justify-center">
                    <button><GiCyborgFace className="" /></button>
                </div>
            </div>
        </div>
    )
}