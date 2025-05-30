import { FaRegTrashAlt, FaCheck } from "react-icons/fa";
import { TaskCard } from "@/types/taskCard";
import { useUserContext } from "@/context/UserContext";

const attributes: string[] = ["STR", "DEX", "CON", "WIZ", "INT", "CHA"];

export const TaskCardComponent = ( { task, onTaskRemove, onRewardUpdate, onToggleCompletion, onToggleAttribute }: TaskCard ) => {
    const { id, name, silver_reward, gold_reward, is_completed, attribute, reward_given, xp_reward } = task;
    const { userData, refreshUserData } = useUserContext();
    if (!userData) return "Loading...";

    return (
        <div className={`relative border border-emerald-500/50 font-mono shadow-xl overflow-hidden`}>
      
      {/* Circuitos de fundo */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 200 100">
          <defs>
            <pattern id="pcb-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 L10,10 L10,0 M10,20 L10,10 L20,10" stroke="#10b981" strokeWidth="0.3" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pcb-pattern)"/>
          <circle cx="20" cy="20" r="2" fill="#10b981" opacity="0.3"/>
          <circle cx="180" cy="80" r="2" fill="#10b981" opacity="0.3"/>
          <circle cx="100" cy="50" r="1.5" fill="#fbbf24" opacity="0.4"/>
        </svg>
      </div>

      {/* LED Status Indicator */}
      <div className="absolute bottom-1 right-2 flex space-x-1 opacity-40">
        <div className={`w-2 h-2 rounded-full ${reward_given ? 'bg-green-400 shadow-lg shadow-green-400/50' : 'bg-red-400 shadow-lg shadow-red-400/50'}`}></div>
      </div>

      {/* Pins decorativos */}
      <div className="absolute left-0 top-1/4 bottom-1/4 flex flex-col justify-evenly">
        {[...Array(0)].map((_, i) => (
          <div key={i} className="w-2 h-1 bg-yellow-600 border-l-2 border-yellow-500"></div>
        ))}
      </div>

      <div className="relative z-10 p-1.5 pt-0 my-1.5">
        {/* Header Section */}
        <div className="flex flex-row items-start justify-between w-full mb-3">
          <div className="flex flex-row w-full max-w-11/12 items-start">
            {/* Complete Button - Styled as circuit switch */}
            <button 
              id="CompleteTaskButton"
              className="relative border-2 border-emerald-600/70 min-w-6 h-6 flex items-center justify-center hover:bg-emerald-900/50 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/30"
              onClick={() => onToggleCompletion( id, userData.id, silver_reward, gold_reward, is_completed, reward_given, userData, refreshUserData, xp_reward, attribute)}
            >
              {is_completed && <FaCheck className="w-4 h-4 text-green-400" />}
            </button>
            
            <div className="ml-1 flex-1">
              <p className={`text-emerald-300 font-bold text-base leading-tight tracking-wide ${is_completed ? 'line-through text-emerald-800' : ''}`}>
                {name}
              </p>
              <div className="w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent mt-1"></div>
            </div>
          </div>
          
          {/* Delete Button - Styled as danger component */}
          <button
            id="DeleteTaskButton"
            className="w-4 h-4 flex items-center justify-center transition-all duration-300 text-red-400 hover:text-red-500"
            onClick={() => onTaskRemove(id, 1)}
          >
            <FaRegTrashAlt className="w-4 h-4"/>
          </button>
        </div>

        <div className="flex flex-row justify-between items-end">
          {/* Attributes Section */}
          <div className="flex flex-col bg-black">
            <div className="grid grid-cols-3 gap-1 text-sm">
              {attributes.map(att => (
                <button 
                  key={att}
                  className={`px-2 py-1 transition-all duration-200 font-mono text-xs tracking-wider font-bold
                    ${attribute === att 
                      ? "bg-gradient-to-r from-emerald-700 to-emerald-600 border-emerald-400 text-black shadow-md shadow-emerald-500/30" 
                      : "bg-gradient-to-r text-emerald-700 hover:border-emerald-600/50 hover:bg-emerald-900/30"
                    }`}
                  onClick={() => onToggleAttribute(id, userData.id, att)}
                >
                  {att}
                </button>
              ))}
            </div>
          </div>

          {/* Rewards Section */}
          <div className="flex flex-col">
            
            {/* Silver Counter */}
            <div className="flex items-center gap-2 py-1 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border border-gray-600 shadow-inner"></div>
                <span className="text-xs text-gray-300 font-mono">Ag</span>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  className="w-5 h-5 border border-emerald-600/70 hover:from-emerald-800 hover:to-emerald-700 flex items-center justify-center transition-all duration-200 hover:shadow-md"
                  onClick={() => onRewardUpdate(task.id, userData.id, 'silver_reward', 'decrease')}
                >
                  -
                </button>
                <span className="w-6 text-center text-xs text-emerald-100 font-mono bg-black/30 py-0.5 border border-emerald-600/70">
                  {silver_reward}
                </span>
                <button 
                  className="w-5 h-5 border border-emerald-600/70 hover:from-emerald-800 hover:to-emerald-700 flex items-center justify-center transition-all duration-200 hover:shadow-md"
                  onClick={() => onRewardUpdate(task.id, userData.id, 'silver_reward', 'increase')}
                >
                  +
                </button>
              </div>
            </div>

            {/* Gold Counter */}
            <div className="flex items-center gap-2 py-1 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-inner"></div>
                <span className="text-xs text-yellow-400 font-mono">Au</span>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  className="w-5 h-5 border border-emerald-600/70 hover:from-emerald-800 hover:to-emerald-700 flex items-center justify-center transition-all duration-200 hover:shadow-md"
                  onClick={() => onRewardUpdate(task.id, userData.id, 'gold_reward', 'decrease')}
                >
                  -
                </button>
                <span className="w-6 text-center text-xs text-emerald-100 font-mono bg-black/30 py-0.5 border border-emerald-600/70">
                  {gold_reward}
                </span>
                <button 
                  className="w-5 h-5 border border-emerald-600/70 hover:from-emerald-800 hover:to-emerald-700 flex items-center justify-center transition-all duration-200 hover:shadow-md"
                  onClick={() => onRewardUpdate(task.id, userData.id, 'gold_reward', 'increase')}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom connector pins */}
      <div className="absolute bottom-0 left-1/4 right-1/4 flex justify-evenly opacity-30">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1 h-2 bg-yellow-600 border-l border-r border-yellow-500"></div>
        ))}
      </div>

      {/* Top corner notch */}
      <div className="absolute top-0 left-0 w-3 h-3 transform rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}