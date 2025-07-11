export default function TimerDisplay() {
    return (
        <div className="relative text-center w-full p-2">
            <div className="border border-emerald-950 bg-black p-8 relative">
                
                {/* LED Indicators */}
                <div className="flex justify-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>

                <div className="text-6xl font-bold text-emerald-200 mb-2 tracking-wider">
                    00:00
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 bg-gray-800 h-2 border border-emerald-400">
                    <div className="bg-emerald-400 h-full w-0 transition-all duration-1000"></div>
                </div>
            </div>
        </div>
    )
}