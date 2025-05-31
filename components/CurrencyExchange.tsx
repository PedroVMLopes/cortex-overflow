import { FaAngleRight, FaGem } from "react-icons/fa";
import { GiCrownCoin } from "react-icons/gi";

export default function CurrencyExchange() {
    return (
        <>
            <div className="px-2">
                <p className="backdrop-blur bg-black/80 rounded p-1 text-center"> Transmutação de Moedas</p>

                {/* Silver to gold exchange */}
                <div className="flex flex-col items-center w-full mt-4 bg-black/80 backdrop-blur-2xl rounded">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-gray-300 text-2xl mr-1" /> 10 </p>
                            <p className="text-sm">PRATA</p>
                        </div>
                        <p className="text-emerald-50">===</p>
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 1 </p>
                            <p className="text-sm">OURO</p>
                        </div>
                    </div>
                    <button className="bg-gradient-to-tr from-black/70 to-yellow-500/50 w-[90%] cursor-pointer text-amber-300 py-0.5 mb-2 font-bold shadow-lg flex flex-row justify-center">
                        <p className="flex flex-row items-center text-emerald-50"> TRANSMUTAR <GiCrownCoin className="text-gray-300 text-lg mx-1" /> 10 </p>
                    </button>
                </div>

                {/* Gold to gem exchange */}
                <div className="flex flex-col items-center w-full mt-6 bg-black/80 backdrop-blur-2xl rounded">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 5 </p>
                            <p className="text-sm">OURO</p>
                        </div>
                        <p className="text-emerald-50">===</p>
                        <div className="p-2 px-4 flex flex-col items-center w-20">
                            <p className="flex flex-row items-center text-white"> <FaGem className="text-cyan-400 mr-1" /> 1 </p>
                            <p className="text-sm">GEMA</p>
                        </div>
                    </div>
                    <button className="bg-gradient-to-tr from-black/70 to-blue-500/70 w-[90%] cursor-pointer text-amber-300 py-0.5 mb-2 font-bold shadow-lg flex flex-row justify-center">
                        <p className="flex flex-row items-center text-emerald-50"> TRANSMUTAR <GiCrownCoin className="text-amber-300 text-lg mx-1" /> 1 </p>
                    </button>
                </div>
            </div>
        </>
    )
}