import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

const attributes: string[] = ["STR", "DEX", "CHA", "WIZ", "INT", "CON"];

export const TaskCard = () => {
    return (
        <div className="font-mono">
            <div className="flex flex-row items-center justify-between p-1">
                <div className="flex flex-row gap-2">
                    <button className="border w-6 h-6 flex items-center justify-center">  </button>
                    <p>Titulo</p>
                </div>
                <FaRegTrashAlt className="text-red-400"/>
            </div>
            {/* Attributes buttons */}
            <div className="flex flex-row mt-1">
                <div className="grid grid-cols-3 gap-2 text-sm">
                    {attributes.map(att => (
                        <button key={att}>{att}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}