import { FaAngleRight, FaGem } from "react-icons/fa";
import { GiCrownCoin, GiStandingPotion } from "react-icons/gi";

export default function Store() {
    return (
        <div className="text-emerald-500 font-mono m-2">
            <p className="text-xs opacity-70 flex flex-row items-center mb-1 text-white"> <FaAngleRight /> Biotech_Store </p>
            <div className="h-[2px] bg-emerald-800 w-full mb-2"></div>
            <div className="px-2">
                <p className="flex flex-row items-center"> TRANSMUTAÇÃO_DE_MOEDAS</p>
                {/* Silver to gold exchange */}
                <div className="flex flex-col items-center mt-3 w-full bg-emerald-950">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="p-2 px-4 w-min flex flex-col items-center">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-gray-300 text-2xl mr-1" /> 10 </p>
                            <p className="text-sm opacity-70">PRATA</p>
                        </div>
                        <p className="text-white">===</p>
                        <div className="p-2 px-4 w-min flex flex-col items-center">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 1 </p>
                            <p className="text-sm opacity-70">OURO</p>
                        </div>
                    </div>
                    <button className="bg-emerald-800 w-full"> <p className="animate-pulse">[ REALIZAR TROCA ]</p> </button>
                </div>

                {/* Gold to gem exchange */}
                <div className="flex flex-col items-center mt-4 w-full bg-emerald-950">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="p-2 px-4 w-min flex flex-col items-center">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 5 </p>
                            <p className="text-sm opacity-70">OURO</p>
                        </div>
                        <p className="text-white">===</p>
                        <div className="p-2 px-4 w-min flex flex-col items-center">
                            <p className="flex flex-row items-center text-white"> <FaGem className="text-blue-400  mr-1" /> 1 </p>
                            <p className="text-sm opacity-70">GEMA</p>
                        </div>
                    </div>
                    <button className="bg-emerald-800 w-full"> <p className="animate-pulse">[ REALIZAR TROCA ]</p> </button>
                </div>
            </div>
        </div>
    )
}