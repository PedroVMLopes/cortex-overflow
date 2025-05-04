import { FaStore, FaCoins } from "react-icons/fa";
import { GiCyborgFace, GiCyberEye, GiCrownedSkull, GiOpenTreasureChest, GiCrownCoin, GiGems } from "react-icons/gi";
import Link from "next/link";

export default function Navbar():any {

    return (
        <div className="fixed bottom-0 pb-1 px-1 w-full">
            <div className="grid grid-cols-3 items-center text-center m-2 py-1 pb-2 border border-green-600">
                <div className="flex flex-col justify-center items-center gap-1">
                    <p>10</p>
                    <FaCoins className="text-gray-400"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <p>10</p>
                    <GiCrownCoin className="text-amber-300"/>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <p>10</p>
                    <GiGems className="text-blue-400"/>
                </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 my-4 items-center text-center text-xl">
                <div className="flex justify-center">
                    <Link href="/"><GiCyberEye /></Link>
                </div>
                <div className="flex justify-center">
                    <Link href="/mission-objectives"><GiCrownedSkull /></Link>
                </div>
                <div className="flex justify-center">
                    <button><GiOpenTreasureChest /></button>
                </div>
                <div className="flex justify-center">
                    <button><GiCyborgFace /></button>
                </div>
            </div>
        </div>
    )
}