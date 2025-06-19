import { useTasks } from '@/hooks/useTasks';
import { FaGem } from 'react-icons/fa';

type ChipProps = {
  description: string;
  price: number;
  selectedTaskId: number | null;
  newXpReward: number;
}

export default function ComputerChip({ description, price , selectedTaskId, newXpReward}: ChipProps) {

  const { implementChipInTask } = useTasks();

  return (
    <div className="relative">

      {/* Para adicionar pins laterais mude o valor dos arrays */}
      <div className="absolute -left-2 top-3 bottom-3 flex flex-col justify-evenly">
        {[...Array(0)].map((_, i) => (
          <div key={i} className="w-3 h-1 bg-yellow-500 border border-yellow-700"></div>
        ))}
      </div>
      <div className="absolute -right-2 top-3 bottom-3 flex flex-col justify-evenly">
        {[...Array(0)].map((_, i) => (
          <div key={i} className="w-3 h-1 bg-yellow-500 border border-yellow-700"></div>
        ))}
      </div>


      {/* Corpo principal do chip */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 shadow-xl relative overflow-hidden">   
        
        {/* Header do chip */}
        <div className="relative bg-gradient-to-r from-emerald-950 to-emerald-900 p-3 border-b border-emerald-700 py-4">
          <div className="flex flex-row text-sm items-center justify-evenly relative z-10">
            <p className="text-white font-mono font-bold tracking-wider">ATRIBUTO +</p>
          </div>
          <p className="text-xs text-center text-emerald-200 font-mono mt-1">
            {description}
          </p>
          
          {/* LED indicator */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-green-400/50"></div>
        </div>
        
        {/* Slot de instalação */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900">
          <button 
            className="w-full py-2 pb-3 bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-xs flex flex-row items-center justify-center font-mono font-bold text-emerald-100 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 border-t border-emerald-600/50"
            onClick={() => implementChipInTask(selectedTaskId, price, newXpReward)}
          >
            <span className="tracking-wider">IMPLANTAR: {price}</span>
            <FaGem className="ml-1.5 text-blue-400 text-base drop-shadow-md" />
          </button>
          
          {/* Conectores na parte inferior */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-2 bg-yellow-600 border border-yellow-500"></div>
            ))}
          </div>
        </div>
        
        {/* Cantos chanfrados característicos de chips */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-yellow-800 transform rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
        
      </div>
      
      {/* Sombra do chip */}
      <div className="absolute inset-0 bg-black/30 transform translate-x-2 translate-y-2 -z-10 border-2 border-transparent"></div>
    </div>
  );
}