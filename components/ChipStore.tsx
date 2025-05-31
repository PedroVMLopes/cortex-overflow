import Chip from "./Chip";

export default function ChipStore() {
    return (
        <div className="mt-4 px-2">
            <div className="backdrop-blur bg-black/80 rounded p-2 text-center">
                <p className="font-bold text-nowrap">CHIPS DE MELHORIA</p>
                <p className="text-xs opacity-80 text-white">Use seu esforço para enganar seu cérebro a completar tarefas difíceis</p>
            </div>
            <div className="grid grid-cols-2 mt-4 gap-7">
                <Chip />
                <Chip />
            </div>
        </div>
    )
}