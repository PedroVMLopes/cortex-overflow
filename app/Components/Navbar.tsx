import { GiCyborgFace, GiCyberEye, GiCrownedSkull, GiOpenTreasureChest, GiCrownCoin, GiGems } from "react-icons/gi";
import Link from "next/link";

export default function Navbar():any {

    return (
        <div className="fixed bottom-0 pb-1 px-1 w-full font-mono text-emerald-500">
            <div className="grid grid-cols-3 items-center text-center m-2 py-1.5 border border-emerald-800 bg-emerald-950">
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
            <div className="grid grid-cols-4 grid-rows-1 my-2 items-center text-center text-3xl">
                <div className="flex justify-center">
                    <Link href="/"><GiCyberEye className="bg-emerald-950 border border-emerald-900 p-0.5 shadow shadow-emerald-400" /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/LegacyObjectives"><GiCrownedSkull className="bg-emerald-950 border border-emerald-900 p-0.5" /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/Store"><GiOpenTreasureChest className="bg-emerald-950 border border-emerald-900 p-0.5" /></Link>
                </div>
                <div className="flex justify-center">
                    <button><GiCyborgFace className="bg-emerald-950 border border-emerald-900 p-0.5" /></button>
                </div>
            </div>
        </div>
    )
}