import { FaStore, FaCoins } from "react-icons/fa";
import { GiCyborgFace, GiCyberEye, GiCrownedSkull, GiOpenTreasureChest, GiCrownCoin, GiGems } from "react-icons/gi";
import Link from "next/link";

export default function Navbar():any {

    return (
        <div className="fixed bottom-0 pb-1 px-1 w-full font-mono">
            <div className="grid grid-cols-3 items-center text-center m-2 py-1.5 rounded shadow shadow-emerald-600">
                <div className="flex flex-col justify-center items-center gap-0.5">
                    <div className="flex flex-row gap-1.5 items-center">
                        <FaCoins className="text-gray-400"/>
                        <p>10</p>
                    </div>
                    <p className="text-xs opacity-60">SILVER</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiCrownCoin className="text-amber-300"/>
                        <p>10</p>
                    </div>
                    <p className="text-xs opacity-60">GOLD</p>
                </div>
                    
                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="flex flex-row gap-1.5 items-center">
                        <GiGems className="text-blue-400"/>
                        <p>10</p>
                    </div>
                    <p className="text-xs opacity-60">GEMS</p>
                </div>
                    
            </div>
            <div className="grid grid-cols-4 grid-rows-1 my-4 items-center text-center text-2xl">
                <div className="flex justify-center">
                    <Link href="/"><GiCyberEye className="bg-emerald-800 text-black shadow shadow-emerald-400" /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/LegacyObjectives"><GiCrownedSkull className="bg-emerald-800 text-black shadow shadow-emerald-400" /></Link>
                </div>
                <div className="flex justify-center">
                    <button><GiOpenTreasureChest className="bg-emerald-800 text-black shadow shadow-emerald-400" /></button>
                </div>
                <div className="flex justify-center">
                    <button><GiCyborgFace className="bg-emerald-800 text-black shadow shadow-emerald-400" /></button>
                </div>
            </div>
        </div>
    )
}