'use client'

import { useState, useEffect } from "react";
import { TaskCardComponent } from "../../components/taskCard";
import { useUser } from "../../context/UserContext";
import { Task } from "@/types/task";

import React from "react";
import { useTasks } from "@/hooks/useTasks";


export default function MainTasks() {

    const [ taskName, setTaskName ] = useState("");
    const { tasks, loading } = useTasks();
    
    


    return (
        <>
            {/* Input to add a new task */}
            <div className="flex justify-between border border-emerald-800">
                <input 
                    type="text" 
                    placeholder="Crie uma nova missão..."
                    className="bg-black pl-1 w-full"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button 
                    className="bg-emerald-950 p-1 px-2 w-fit text-nowrap animate-pulse"
                > 
                    + ADD
                </button>
            </div>

            {/* TaskCard list render */}
            <div className="mt-4">
                {tasks.map(task => (
                    <li key={task.id}>
                        <p><strong>{task.name}</strong></p>
                        <p className="text-sm text-gray-600">
                            Status: {task.is_completed ? "Concluída" : "Pendente"}
                        </p>
                    </li>
                ))}
            </div>
        </>
    )
}

