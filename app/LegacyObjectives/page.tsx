'use client'

import HeaderTerminal from "@/components/LegacyObjectives/HeaderTerminal";
import LogList from "@/components/LegacyObjectives/LogList";
import TimerDisplay from "@/components/LegacyObjectives/TimerDisplay";
import TimerSettings from "@/components/LegacyObjectives/TimerSettings";
import { useState } from "react";
import Button from "@/components/KeyboardButton";

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
            <div className="border border-emerald-950 bg-black/60 backdrop-blur flex flex-col items-center py-2">

                {/* Mission Name & Menu Button */}
                <TimerSettings />

                {/* Main Timer Display */}
                <TimerDisplay />

                {/* Buttons & Controllers */}
                <div className="p-4 w-full flex flex-row gap-4">
                    <Button className="w-full ">START</Button>
                    <Button className="w-full ">PAUSE</Button>
                    <Button className="w-full ">FINISH</Button>
                </div>
                
            </div>

            {/* Logs Section */}
            <div className="border border-emerald-950 bg-black/60 backdrop-blur flex flex-col items-center mt-2">
                {/* Add Custom Log */}
                <div className="flex flex-row items-center justify-around w-full p-0 border-b border-emerald-950">
                    <input type="text" name="custom_log" id="" placeholder="Add a Custom Log" className="w-full pl-4 mr-1"/>
                    <button type="button" className="text-emerald-100 bg-emerald-900 p-0.5 px-1.5">Add</button>
                </div>
                <LogList />
            </div>

        </div>
    )
}