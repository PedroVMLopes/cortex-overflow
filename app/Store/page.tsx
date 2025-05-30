import { FaAngleRight, FaGem } from "react-icons/fa";
import { GiCrownCoin, GiStandingPotion } from "react-icons/gi";

export default function Store() {
    return (
        <div className="text-emerald-500 font-mono m-2">
            <p className="text-xs opacity-70 flex flex-row items-center mb-1 text-white"> <FaAngleRight /> Biotech_Store </p>
            <div className="h-[2px] bg-emerald-800 w-full mb-2"></div>
            <div className="px-2">
                <p className="flex flex-row items-center"> TRANSMUTAÇÃO_DE_MOEDAS</p>
                <div className="flex flex-col items-center mt-3 w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="border p-2 px-4 w-min flex flex-col items-center">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-gray-300 text-2xl mr-1" /> 10 </p>
                            <p className="text-sm">PRATA</p>
                        </div>
                        <p className="text-white">===</p>
                        <div className="border p-2 px-4 w-min flex flex-col items-center">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 1 </p>
                            <p className="text-sm">OURO</p>
                        </div>
                    </div>
                    <button className="bg-emerald-950 mt-2 w-full">[ REALIZAR TROCA ]</button>
                </div>
            </div>
        </div>
    )
}