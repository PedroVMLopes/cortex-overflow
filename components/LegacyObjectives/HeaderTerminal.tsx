export default function HeaderTerminal() {
    return (
        <div className="relative z-10 border border-emerald-950 bg-black/50 p-4 mb-4 w-full">
            <div className="flex items-center mb-1">
                <span className="text-xs opacity-60">POMODORO_REACTOR_V1.0</span>
            </div>
            <div className="text-sm mb-2">
                <span className="text-emerald-300">user@focus:~$</span> 
                <span className="ml-2">reactor --charges</span>
            </div>

            {/* Session Counter */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-4 h-4 border ${i < 2 ? 'bg-emerald-400 border-emerald-400' : 'bg-gray-800 border-gray-600'}`}></div>
                    ))}
                </div>
                <div className="text-sm">
                    <span className="text-emerald-300">COMPLETED:</span> 
                    <span className="text-emerald-400 ml-2 font-bold">02/04</span>
                </div>
            </div>
        </div>
    )
}