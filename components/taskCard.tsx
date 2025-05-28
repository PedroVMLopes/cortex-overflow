import { FaRegTrashAlt, FaCheck } from "react-icons/fa";
import { TaskCard } from "@/types/taskCard";

const attributes: string[] = ["STR", "DEX", "CON", "WIZ", "INT", "CHA"];

export const TaskCardComponent = ( { task, onTaskRemove, onRewardUpdate }: TaskCard ) => {
    const { id, name, silver_reward, gold_reward, is_completed, attribute } = task;

    return (
        <div className={`font-mono border mt-3 ${is_completed && "opacity-40"}`}>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2">
                    <button 
                        id="CompleteTaskButton"
                        className="border w-6 h-6 flex items-center justify-center hover:bg-emerald-900"
                        >
                            {is_completed ? <FaCheck /> : ""} 
                        </button>
                    <p>{ name }</p>
                </div>
                <button
                    id="DeleteTaskButton"
                    onClick={() => onTaskRemove(id, 1)}
                >
                    <FaRegTrashAlt className="text-red-400 opacity-70 hover:opacity-100 mr-1"/>
                </button>
            </div>

            <div className="flex flex-row mt-2 justify-between">
                {/* Attributes buttons */}
                <div className="grid grid-cols-3 gap-1 text-sm text-gray-300">
                    {attributes.map(att => (
                        <button 
                            key={att}
                            className={`p-0.5 hover:bg-emerald-900 ${attribute === att ? "bg-emerald-900" : ""} `}
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
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors"
                            onClick={() => onRewardUpdate(task.id, 1, 'silver_reward', 'decrease')}
                            >-</button>
                            <span className="w-8 text-center text-xs">{silver_reward}</span>
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors"
                            onClick={() => onRewardUpdate(task.id, 1, 'silver_reward', 'increase')}
                            >+</button>
                        </div>
                    </div>
                    {/* Gold Coin */}
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600"></div>
                            <span className="text-xs">Au</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-300">
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors"
                            onClick={() => onRewardUpdate(task.id, 1, 'gold_reward', 'decrease')}
                            >-</button>
                            <span className="w-8 text-center text-xs">{gold_reward}</span>
                            <button className="w-6 h-6 border border-emerald-600 bg-transparent hover:bg-emerald-900 flex items-center justify-center text-xs transition-colors"
                            onClick={() => onRewardUpdate(task.id, 1, 'gold_reward', 'increase')}
                            >+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}