import { FaAngleRight, FaGem, FaCaretDown } from "react-icons/fa";
import { GiCrownCoin } from "react-icons/gi";

export default function CurrencyExchange() {
    return (
        <>
            <div className="border border-emerald-900">
                <p className="bg-emerald-500 border-b border-emerald-900 text-black font-semibold p-1 text-center"> Transmutação de Moedas</p>
                <div className="flex flex-row gap-2 p-2 bg-black/50">

                    {/* Silver to gold exchange */}
                    <div className="flex flex-col items-center w-full bg-gradient-to-t from-black to-amber-300/30 backdrop-blur-2xl border border-emerald-900">
                        <div className="flex flex-col items-center justify-evenly w-full">
                            <div className="p-2 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-gray-300 text-2xl mr-1" /> 10 </p>
                            </div>
                            <p className="text-emerald-500"> <FaCaretDown /> </p>
                            <div className="p-2 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-400 text-2xl mr-1" /> 1 </p>
                            </div>
                        </div>
                        <button className="bg-emerald-600 border-4 border-t-2 border-r-2 border-emerald-800 w-[90%] cursor-pointer py-0.5 mb-2 font-bold shadow shadow-emerald-500 flex flex-row justify-center">
                            <p className="flex flex-row items-center text-emerald-50"> [EXEC] <GiCrownCoin className="text-gray-300 text-lg mx-1" /> 10 </p>
                        </button>
                    </div>

                    {/* Gold to gem exchange */}
                    <div className="flex flex-col items-center w-full bg-gradient-to-t from-black to-blue-400/30 backdrop-blur-2xl border border-emerald-900">
                        <div className="flex flex-col items-center justify-evenly w-full">
                            <div className="p-2 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 5 </p>
                            </div>
                            <p className="text-emerald-500"> <FaCaretDown /> </p>
                            <div className="p-2 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <FaGem className="text-cyan-400 mr-1" /> 1 </p>
                            </div>
                        </div>
                        <button className="bg-emerald-600 border-4 border-t-2 border-r-2 border-emerald-800 w-[90%] cursor-pointer py-0.5 mb-2 font-bold shadow shadow-emerald-500 flex flex-row justify-center">
                            <p className="flex flex-row items-center text-emerald-50"> [EXEC] <GiCrownCoin className="text-amber-300 text-lg mx-1" /> 1 </p>
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}