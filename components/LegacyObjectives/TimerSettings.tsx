'use client'

import { useState } from "react";
import { RiMenuAddFill } from "react-icons/ri";

export default function TimerSettings() {
    const attributes: string[] = ["STR", "DEX", "CON", "WIZ", "INT", "CHA"];
    const [ isExpanded, setIsExpanded ] = useState(true);

    return (
        <div>
            {/* Mission Name & Menu expansion button */}
            <div className="flex flex-row items-center">
                <input type="text" placeholder="Insert Mission Name:" className="w-full text-center font-semibold text-lg"/>
                <button className="size-6 text-lg mr-1" onClick={() => setIsExpanded(!isExpanded)}> <RiMenuAddFill /> </button>
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

                </div>
            }
        </div>
    )
}