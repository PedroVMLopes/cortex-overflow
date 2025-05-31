import { FaAngleRight, FaGem } from "react-icons/fa";
import { GiCrownCoin } from "react-icons/gi";

export default function CurrencyExchange() {
    return (
        <>
            <div className="px-2">
                <p className="font-bold mt-4"> TRANSMUTAÇÃO_DE_MOEDAS</p>

                {/* Silver to gold exchange */}
                <div className="flex flex-col items-center w-full mt-4 bg-gradient-to-r from-black to-yellow-500/20 rounded-t">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-gray-300 text-2xl mr-1" /> 10 </p>
                            <p className="text-sm opacity-70">PRATA</p>
                        </div>
                        <p className="text-emerald-50">===</p>
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 1 </p>
                            <p className="text-sm opacity-70">OURO</p>
                        </div>
                    </div>
                    <button className="bg-emerald-800 w-full cursor-pointer shadow-md rounded shadow-emerald-800 text-emerald-50"> <p>[ REALIZAR TROCA ]</p> </button>
                </div>

                {/* Gold to gem exchange */}
                <div className="flex flex-col items-center w-full mt-6 bg-gradient-to-r from-black to-blue-400/20 rounded-t">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 5 </p>
                            <p className="text-sm opacity-70">OURO</p>
                        </div>
                        <p className="text-emerald-50">===</p>
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <FaGem className="text-blue-400  mr-1" /> 1 </p>
                            <p className="text-sm opacity-70">GEMA</p>
                        </div>
                    </div>
                    <button className="bg-emerald-800 w-full cursor-pointer shadow-md rounded shadow-emerald-800 text-emerald-50"> <p>[ REALIZAR TROCA ]</p> </button>
                </div>
            </div>
        </>
    )
}