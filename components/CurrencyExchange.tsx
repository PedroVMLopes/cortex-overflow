import { FaAngleRight, FaGem } from "react-icons/fa";
import { GiCrownCoin } from "react-icons/gi";

export default function CurrencyExchange() {
    return (
        <>
            <div className="px-2">
                <p className="font-bold"> TRANSMUTAÇÃO_DE_MOEDAS</p>
                {/* Silver to gold exchange */}
                <div className="flex flex-col items-center mt-2 w-full bg-emerald-950">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-gray-300 text-2xl mr-1" /> 10 </p>
                            <p className="text-sm opacity-70">PRATA</p>
                        </div>
                        <p className="text-white">===</p>
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 1 </p>
                            <p className="text-sm opacity-70">OURO</p>
                        </div>
                    </div>
                    <button className="bg-emerald-800 w-full cursor-pointer shadow shadow-emerald-800"> <p className="animate-pulse">[ REALIZAR TROCA ]</p> </button>
                </div>

                {/* Gold to gem exchange */}
                <div className="flex flex-col items-center mt-4 w-full bg-emerald-950">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 5 </p>
                            <p className="text-sm opacity-70">OURO</p>
                        </div>
                        <p className="text-white">===</p>
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <FaGem className="text-blue-400  mr-1" /> 1 </p>
                            <p className="text-sm opacity-70">GEMA</p>
                        </div>
                    </div>
                    <button className="bg-emerald-800 w-full cursor-pointer shadow shadow-emerald-800"> <p className="animate-pulse">[ REALIZAR TROCA ]</p> </button>
                </div>
            </div>
        </>
    )
}