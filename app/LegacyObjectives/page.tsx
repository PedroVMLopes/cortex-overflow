'use client'

import ControllerButtons from "@/components/LegacyObjectives/ControllerButtons";
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
                    <ControllerButtons />

                </div>
            </div>

            {/* Logs Section */}
            <LogList />

        </div>
    )
}