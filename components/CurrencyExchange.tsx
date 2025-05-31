import { FaAngleRight, FaGem, FaCaretDown } from "react-icons/fa";
import { GiCrownCoin } from "react-icons/gi";

export default function CurrencyExchange() {
    return (
        <>
            <div className="border border-emerald-500">
                <p className="bg-emerald-500 text-black font-semibold p-1 text-center"> Transmutação de Moedas</p>
                <div className="flex flex-row gap-2 p-2 bg-black/50">

                    {/* Silver to gold exchange */}
                    <div className="flex flex-col items-center w-full bg-black/80 backdrop-blur-2xl border border-emerald-700">
                        <div className="flex flex-col items-center justify-evenly w-full">
                            <div className="p-2 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-gray-300 text-2xl mr-1" /> 10 </p>
                            </div>
                            <p className="text-emerald-500"> <FaCaretDown /> </p>
                            <div className="p-2 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 1 </p>
                            </div>
                        </div>
                        <button className="bg-emerald-800 border-4 border-y-2 border-emerald-950 w-[90%] cursor-pointer py-0.5 mb-2 font-bold shadow-lg flex flex-row justify-center">
                            <p className="flex flex-row items-center text-emerald-50"> [EXEC] <GiCrownCoin className="text-gray-300 text-lg mx-1" /> 10 </p>
                        </button>
                    </div>

                    {/* Gold to gem exchange */}
                    <div className="flex flex-col items-center w-full bg-black/80 backdrop-blur-2xl border border-emerald-700">
                        <div className="flex flex-col items-center justify-evenly w-full">
                            <div className="p-2 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 5 </p>
                            </div>
                            <p className="text-emerald-500"> <FaCaretDown /> </p>
                            <div className="p-2 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <FaGem className="text-cyan-400 mr-1" /> 1 </p>
                            </div>
                        </div>
                        <button className="bg-emerald-800 border-4 border-y-2 border-emerald-950 w-[90%] cursor-pointer py-0.5 mb-2 font-bold shadow-lg flex flex-row justify-center">
                            <p className="flex flex-row items-center text-emerald-50"> [EXEC] <GiCrownCoin className="text-amber-300 text-lg mx-1" /> 1 </p>
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}