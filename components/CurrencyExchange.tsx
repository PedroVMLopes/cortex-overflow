import { FaAngleRight, FaGem } from "react-icons/fa";
import { GiCrownCoin } from "react-icons/gi";

export default function CurrencyExchange() {
    return (
        <>
            <div className="px-2">
                <p className="font-bold mt-4 text-emerald-50 backdrop-blur-2xl rounded"> TRANSMUTAÇÃO_DE_MOEDAS</p>

                {/* Silver to gold exchange */}
                <div className="flex flex-col items-center w-full mt-4 bg-gradient-to-r to-yellow-500/50 backdrop-blur-2xl rounded">
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
                </div>
                <button className="backdrop-blur bg-black/70 w-full cursor-pointer text-amber-300 rounded mt-0.5 py-0.5 font-bold shadow-lg flex flex-row justify-center">
                    [    <p className="text-emerald-50 mx-2"> REALIZAR TROCA </p>   ]
                </button>

                {/* Gold to gem exchange */}
                <div className="flex flex-col items-center w-full mt-6 bg-gradient-to-r to-blue-600/70 backdrop-blur-2xl rounded">
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
                </div>
                <button className="backdrop-blur bg-black/70 w-full cursor-pointer text-blue-400 rounded mt-0.5 py-0.5 font-bold shadow-lg flex flex-row justify-center">
                    [ <p className="text-emerald-50 mx-2"> REALIZAR TROCA </p> ] 
                </button>
            </div>
        </>
    )
}