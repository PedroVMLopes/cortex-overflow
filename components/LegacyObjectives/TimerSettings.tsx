'use client'

import { useState } from "react";
import { RiMenuAddFill } from "react-icons/ri";

export default function TimerSettings() {
    const attributes: string[] = ["STR", "DEX", "CON", "WIZ", "INT", "CHA"];
    const [ isExpanded, setIsExpanded ] = useState(true);

    return (
        <div className="w-full px-2">
            {/* Mission Name & Menu expansion button */}
            <div className="flex flex-row items-center">
                <input type="text" placeholder="Insert Mission Name:" className="w-full text-center font-semibold text-lg"/>
                <button className="size-6 text-lg mr-1 opacity-60" onClick={() => setIsExpanded(!isExpanded)}> <RiMenuAddFill /> </button>
            </div>
            
            {/* Attribute Buttons & Time Settings */}
            {isExpanded &&
                <div className="flex flex-col">

                    {/* Attribute Buttons */}
                    <div className="my-2 w-full flex flex-row justify-evenly">
                        {attributes.map(att => (
                            <button 
                                key={att}
                                className={`px-2 py-1 transition-all duration-200 font-mono tracking-wider text-sm "bg-gradient-to-r text-emerald-50 hover:border-emerald-600/50 hover:bg-emerald-900/30`}
                            >
                                {att}
                            </button>
                        ))}
                    </div>

                    {/* Timer Settings */}
                    <div className="my-2 w-full flex flex-col px-4 justify-evenly gap-1">
                        <div className="flex flex-row w-full">
                            <p className="text-nowrap">Sprint Duration: </p>
                            <input type="number" name="sprint_duration" id="sprint_duration" className="w-full"/>
                        </div>
                        <div className="flex flex-row w-full">
                            <p className="text-nowrap">Number of Sprints: </p>
                            <input type="number" name="number_of_sprints" id="number_of_sprints" className="w-full"/>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}