import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

const attributes: string[] = ["STR", "DEX", "CON", "WIZ", "INT", "CHA"];

export const TaskCard = () => {
    return (
        <div className="font-mono border">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2">
                    <button className="border w-6 h-6 flex items-center justify-center">  </button>
                    <p>Titulo</p>
                </div>
                <FaRegTrashAlt className="text-red-400 mr-1"/>
            </div>

            <div className="flex flex-row mt-2 justify-between">
                {/* Attributes buttons */}
                <div className="grid grid-cols-3 gap-1 text-sm">
                    {attributes.map(att => (
                        <button 
                            key={att}
                            className="hover:bg-emerald-900 p-0.5"
                            >{att}</button>
                    ))}
                </div>

                {/* Rewards Selection */}
                <div className="flex flex-col justify-end">
                    {/* Silver Coin */}
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-gray-400 border border-gray-600"></div>
                            <span className="text-xs">Ag</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent text-emerald-400 hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors">-</button>
                            <span className="w-8 text-center text-xs text-emerald-400">0</span>
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent text-emerald-400 hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors">+</button>
                        </div>
                    </div>
                    {/* Gold Coin */}
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600"></div>
                            <span className="text-xs">Au</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent text-emerald-400 hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors">-</button>
                            <span className="w-8 text-center text-xs text-emerald-400">0</span>
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent text-emerald-400 hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}