import { useState } from "react";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";
import { Task } from "../MainTasks/page"

const attributes: string[] = ["STR", "DEX", "CON", "WIZ", "INT", "CHA"];

interface TaskCard {
    task: Task;
    onToggleCompletion: (id: number) => void;
}

export const TaskCard = ({ task, onToggleCompletion }: TaskCard ) => {

    const [ silverReward, setSilverReward ] = useState(0);
    const [ goldReward, setGoldReward ] = useState(0);
    const [ selectedAttribute, setSelectedAttribute ] = useState("");

    return (
        <div className={`font-mono border mt-3 ${task.is_completed && "opacity-40"}`}>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2">
                    <button 
                        className="border w-6 h-6 flex items-center justify-center hover:bg-emerald-900"
                        onClick={() => onToggleCompletion(task.id)}
                        >
                            {task.is_completed ? <FaCheck /> : ""} 
                        </button>
                    <p>{ task.name }</p>
                </div>
                <FaRegTrashAlt className="text-red-400 opacity-70 mr-1"/>
            </div>

            <div className="flex flex-row mt-2 justify-between">
                {/* Attributes buttons */}
                <div className="grid grid-cols-3 gap-1 text-sm text-gray-300">
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
                        <div className="flex items-center gap-1 text-gray-300">
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors">-</button>
                            <span className="w-8 text-center text-xs">{silverReward}</span>
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors">+</button>
                        </div>
                    </div>
                    {/* Gold Coin */}
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600"></div>
                            <span className="text-xs">Au</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-300">
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors">-</button>
                            <span className="w-8 text-center text-xs">{goldReward}</span>
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}