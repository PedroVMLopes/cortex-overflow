import { FaAngleRight, FaGem, FaCaretDown } from "react-icons/fa";
import { GiCrownCoin } from "react-icons/gi";

export default function CurrencyExchange() {
    return (
        <>
            <div className="">
                <p className="bg-emerald-950 border-b text-emerald-500 font-bold p-1 text-center"> Transmutação_de_Moedas</p>
                <div className="flex flex-row gap-4 p-4 bg-black/80">

                    {/* Silver to gold exchange */}
                    <div className="flex flex-col items-center w-full bg-black backdrop-blur-3xl border border-emerald-950">
                        <div className="flex flex-col items-center justify-evenly w-full">
                            <div className="p-1 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-gray-300 text-2xl mr-1" /> 10 </p>
                            </div>
                            <p className="text-emerald-500"> <FaCaretDown /> </p>
                            <div className="p-1 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-400 text-2xl mr-1" /> 1 </p>
                            </div>
                        </div>
                        <button className="border-3 border-l-4 border-t-4 border-b-emerald-950 border-r-emerald-900 border-emerald-700 px-2 cursor-pointer py-0.5 mb-2 font-bold flex flex-row justify-center shadow shadow-emerald-800">
                            <p className="flex flex-row items-center text-emerald-500 text-base"> [EXEC] <GiCrownCoin className="text-gray-300 text-lg mx-1" /> 10 </p>
                        </button>
                    </div>

                    {/* Gold to gem exchange */}
                    <div className="flex flex-col items-center w-full bg-gradient-to-t from-black to-emerald-500/20 backdrop-blur-3xl border border-emerald-950">
                        <div className="flex flex-col items-center justify-evenly w-full">
                            <div className="p-1 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <GiCrownCoin className="text-amber-300 text-2xl mr-1" /> 5 </p>
                            </div>
                            <p className="text-emerald-500"> <FaCaretDown /> </p>
                            <div className="p-1 px-4 flex flex-col items-center w-20">
                                <p className="flex flex-row items-center text-white"> <FaGem className="text-cyan-400 mr-1" /> 1 </p>
                            </div>
                        </div>
                        <button className="border-3 border-l-4 border-t-4 border-b-emerald-950 border-r-emerald-900 border-emerald-700 w-[90%] cursor-pointer py-0.5 mb-2 font-bold flex flex-row justify-center shadow shadow-emerald-800">
                            <p className="flex flex-row items-center text-emerald-50 text-base"> [EXEC] <GiCrownCoin className="text-amber-300 text-lg mx-1" /> 1 </p>
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}