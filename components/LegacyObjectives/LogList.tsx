export default function LogList() {
    return (
        <div className="flex flex-col items-center">
            <div className="relative p-4">
                <div className="text-xs text-emerald-300 mb-2 uppercase tracking-widest">System Log</div>
                <div className="text-xs space-y-1 h-24 overflow-y-auto">
                    <div className="text-gray-400">
                        <span className="text-emerald-500">[14:30:15]</span> SESSION_START: Focus mode activated
                    </div>
                    <div className="text-gray-400">
                        <span className="text-emerald-500">[14:05:12]</span> BREAK_COMPLETE: 5min break finished
                    </div>
                    <div className="text-gray-400">
                        <span className="text-emerald-500">[14:00:00]</span> SESSION_COMPLETE: 25min focus session
                    </div>
                    <div className="text-gray-400">
                        <span className="text-emerald-500">[13:35:45]</span> SYSTEM_INIT: Pomodoro timer initialized
                    </div>
                </div>
            </div>
        </div>
    )
}