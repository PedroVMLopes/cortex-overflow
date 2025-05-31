import Chip from "./Chip";
import { FaMicrochip } from "react-icons/fa6";

export default function ChipStore() {
    return (
        <div className="">
            <div className="relative backdrop-blur-2xl bg-black/70 p-2 pb-3 text-center">
                <FaMicrochip className="absolute text-emerald-200"/>
                <p className="font-bold text-nowrap text-emerald-200">CHIPS DE MELHORIA</p>
                <p className="text-xs opacity-80 text-white">Use seu esforço para enganar seu cérebro a completar tarefas difíceis</p>
            </div>
            <div className="grid grid-cols-2 mt-4 px-2 gap-7">
                <Chip />
                <Chip />
                <Chip />
            </div>
        </div>
    )
}