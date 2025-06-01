import Chip from "./Chip";
import { FaMicrochip } from "react-icons/fa6";

export default function ChipStore() {
    return (
        <div className="backdrop-blur border border-emerald-800 pb-4">
            <div className="relative backdrop-blur-2xl bg-black/70 p-2 pb-3 text-center">
                <FaMicrochip className="absolute text-emerald-200"/>
                <p className="font-bold text-nowrap text-emerald-200">CHIPS DE MELHORIA</p>
                <p className="text-sm opacity-80 text-white">Use seu esforço para enganar seu cérebro a completar tarefas difíceis</p>
            </div>
            <div className="mt-2 px-2 w-full">
                <select className="backdrop-blur-2xl bg-black/70 border border-emerald-900 text-emerald-200 w-full mt-2 py-1 px-4 font-mono">
                    <option value={'default'}> Selecione a missão </option>
                    <option value={'tarefa 2'}> Tarefa 2 </option>
                </select>
            </div>
            <div className="grid grid-cols-2 mt-4 px-4 gap-7">
                <Chip />
                <Chip />
            </div>
        </div>
    )
}