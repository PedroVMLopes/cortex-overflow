'use client'

import { useState, useEffect } from "react";
import { TaskCard } from "../Components/taskCard";

export default function MainTasks() {

    interface Task {
        id?: number;
        created_at?: Date;
        name: string;
        attribute?: string;
        silver_amount?: number;
        gold_amount?: number;
        is_completed: boolean;
        user_id: 1;
    }

    let tasks: Task[] = [];

    function createTask(inputName: string): void {
        const newTask: Task = {
            name: inputName,
            attribute: "",
            silver_amount: 0,
            gold_amount: 0,
            is_completed: false,
            user_id: 1
        }
        tasks.push(newTask);
        setTaskName("");
        console.log("Task Criada: ", newTask.name);
    }

    const [taskName, setTaskName] = useState("");

    

    return (
        <>
            {/* Input to add a new task */}
            <div className="flex justify-between border border-emerald-900">
                <input 
                    type="text" 
                    placeholder="Crie uma nova missão..."
                    className="bg-black pl-1"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button 
                    className="bg-emerald-950 p-1 px-2 text-xs"
                    onClick={() => createTask(taskName)}
                > 
                    + ADD
                </button>
            </div>

            {/* TaskCard list render */}
            <div className="mt-4">
                {tasks.map(task => (
                    <div className="bg-amber-300">
                    {task.name}
                    </div>
                ))}
            </div>
        </>
    )
}