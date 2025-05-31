import Chip from "./Chip";

export default function ChipStore() {
    return (
        <div className="mt-4 px-2">
            <div className="flex flex-row items-center"><p className="font-bold text-nowrap">CHIPS DE MELHORIA</p><div className="h-[2px] w-full ml-1 bg-emerald-800"></div></div>
            <p className="text-xs opacity-70 text-white">Use seu esforço para enganar seu cérebro a completar tarefas difíceis</p>
            <div className="grid grid-cols-2 mt-6 gap-7">
                <Chip />
                <Chip />
            </div>
        </div>
    )
}