import { FaGem, FaCaretRight } from "react-icons/fa";
import { GiCrownCoin, GiGems } from "react-icons/gi";
import Button from "./KeyboardButton";

export default function CurrencyExchange() {
    return (
        <>
            <div className="border border-emerald-800">
                <p className="backdrop-blur-2xl bg-black/70 text-emerald-200 font-bold p-1 text-center border-b border-emerald-800"> Transmutação_de_Moedas</p>
                <div className="grid grid-cols-2 gap-4 p-4 backdrop-blur bg-black/40">

                    {/* Silver to gold exchange */}
                    <div className="flex flex-col items-center justify-between p-2 backdrop-blur-2xl bg-black/70 border border-emerald-950">
                        <div className="flex flex-row items-center justify-between w-full px-2">
                            <div className="p-1 flex flex-col items-center">
                                <p className="flex flex-col items-center text-white"> <GiCrownCoin className="text-gray-300 text-2xl" /> 10 </p>
                            </div>
                            <p className="text-emerald-500"> <FaCaretRight /> </p>
                            <div className="p-1 flex flex-col items-center">
                                <p className="flex flex-col items-center justify-center text-white"> <GiCrownCoin className="text-amber-400 text-2xl" /> 1 </p>
                            </div>
                        </div>
                        <Button className="mt-1">
                            <p className="flex flex-row items-center justify-center"> [EXEC] <GiCrownCoin className="text-gray-300 text-lg mx-1" /> 10 </p>
                        </Button>
                    </div>

                    {/* Gold to gem exchange */}
                    <div className="flex flex-col items-center justify-between p-2 backdrop-blur-2xl bg-black/70 border border-emerald-950">
                        <div className="flex flex-row items-center justify-between w-full px-2">
                            <div className="p-1 flex flex-col items-center">
                                <p className="flex flex-col items-center text-white"> <GiCrownCoin className="text-amber-400 text-2xl" /> 5 </p>
                            </div>
                            <p className="text-emerald-500"> <FaCaretRight /> </p>
                            <div className="p-1 flex flex-col items-center mt-0.5">
                                <p className="flex flex-col items-center text-white"> <FaGem className="text-cyan-400 mb-0.5" /> 1 </p>
                            </div>
                        </div>
                        <Button className="w-full mt-1">
                            <p className="flex flex-row items-center justify-center w-full"> [EXEC] <GiCrownCoin className="text-amber-300 text-lg mx-1" /> 1 </p>
                        </Button>
                    </div>
                </div>
                
            </div>
        </>
    )
}