'use client'

import Button from "@/components/KeyboardButton";
import HeaderTerminal from "@/components/LegacyObjectives/HeaderTerminal";
import LogList from "@/components/LegacyObjectives/LogList";
import TimerDisplay from "@/components/LegacyObjectives/TimerDisplay";
import TimerSettings from "@/components/LegacyObjectives/TimerSettings";
import { useState } from "react";

export default function LegacyObjectives() {
    const [ isPlaying , setIsPlaying ] = useState(false);

    return(
        <div className="text-emerald-100 flex flex-col justify-center p-2 font-mono text-base">
            <div
                id="background"
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('/backgrounds/bg11.jpg')" }}
            />

            {/* Header Info */}
            <HeaderTerminal />

            {/* Main Information Div */}
            <div className="border border-emerald-950 bg-black/60 backdrop-blur flex flex-col items-center">

                {/* Main Timer Display */}
                <TimerDisplay />

                {/* Buttons & Controllers */}
                <div className="p-4 pt-2 w-full">

                    {/* Mission Name & Menu Button */}
                    <TimerSettings />

                    {/* Controller Buttons */}
                    <div className="flex flex-row gap-2 mt-4">
                        <Button className="w-full border-b-sky-900 border-sky-800 border-t-sky-600 shadow-sky-800 text-sky-200 from-sky-900/80 to-sky-400/30">START</Button>
                        <Button className="w-full border-b-yellow-900 border-yellow-800 border-t-yellow-600 shadow-yellow-800 text-yellow-200 from-yellow-900/80 to-yellow-400/30">PAUSE</Button>
                        <Button className="w-full border-b-red-900 border-red-800 border-t-red-600 shadow-red-800 text-red-200 from-red-900/80 to-red-400/30">FINISH</Button>
                    </div>
                </div>
            </div>

            {/* Logs Section */}
            <LogList />

        </div>
    )
}