'use client'

import Button from "@/components/KeyboardButton";
import { useState } from "react";
import { RiMenuAddFill } from "react-icons/ri";

export default function LegacyObjectives() {
    const attributes: string[] = ["STR", "DEX", "CON", "WIZ", "INT", "CHA"]; 
    const [ isExpanded, setIsExpanded ] = useState(true);  

    return(
        <div className="text-emerald-100 flex flex-col justify-center p-2 font-mono">
            <div
                id="background"
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('/backgrounds/bg11.jpg')" }}
            />

            {/* Header Terminal */}
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

            {/* Main Information Div */}
            <div className="border border-emerald-950 bg-black/60 backdrop-blur">

                {/* Main Timer Display */}
                <div className="relative text-center w-full p-2">
                    <div className="border-2 border-emerald-600 bg-black p-8 relative rounded">
                        
                        {/* LED Indicators */}
                        <div className="flex justify-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        </div>

                        <div className="text-6xl font-bold text-emerald-300 mb-2 tracking-wider">
                            00:00
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-4 bg-gray-800 h-2 border border-emerald-400">
                            <div className="bg-emerald-400 h-full w-0 transition-all duration-1000"></div>
                        </div>
                    </div>
                </div>

                {/* Buttons & Controllers */}
                <div className=" p-2">

                    <div className="flex flex-row">
                        <input type="text" placeholder="Insert Mission Name:" className="w-full text-center font-semibold text-lg"/>
                        <button className="size-6 text-2xl mr-1" onClick={() => setIsExpanded(!isExpanded)}> <RiMenuAddFill /> </button>
                    </div>
                    
                    {/* Attribute Buttons & Time Settings */}
                    {isExpanded &&
                        <div className="my-2 w-full flex flex-row justify-evenly">
                            {attributes.map(att => (
                                <button 
                                    key={att}
                                    className={`px-2 py-1 transition-all duration-200 font-mono tracking-wider text-sm "bg-gradient-to-r text-emerald-50 opacity-60 hover:border-emerald-600/50 hover:bg-emerald-900/30`}
                                >
                                    {att}
                                </button>
                            ))}
                        </div>
                    }
                    

                    {/* Controller Buttons */}
                    <div className="flex flex-row gap-2 mt-4">
                        <Button className="w-full border-b-sky-900 border-sky-800 border-t-sky-600 shadow-sky-800 text-sky-200 from-sky-900/80 to-sky-400/30">START</Button>
                        <Button className="w-full border-b-yellow-900 border-yellow-800 border-t-yellow-600 shadow-yellow-800 text-yellow-200 from-yellow-900/80 to-yellow-400/30">PAUSE</Button>
                        <Button className="w-full border-b-red-900 border-red-800 border-t-red-600 shadow-red-800 text-red-200 from-red-900/80 to-red-400/30">FINISH</Button>
                    </div>
                </div>

                {/* Text Logs */}
                <div></div>
            </div>
        </div>
    )
}