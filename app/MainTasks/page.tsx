'use client'

import { useState, useEffect } from "react";
import { TaskCard } from "../Components/taskCard";

export default function MainTasks() {

    const [ tasks, setTasks ] = useState<Task[]>([])
    const [ taskName, setTaskName ] = useState("");

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


    function createTask(inputName: string): void {
        const newTask: Task = {
            name: inputName,
            attribute: "",
            silver_amount: 0,
            gold_amount: 0,
            is_completed: false,
            user_id: 1
        }
        
        setTasks(prevTasks => [...prevTasks, newTask]);
        setTaskName("");
        console.log("Task Criada: ", newTask.name);
    }


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
                    className="bg-emerald-950 p-1 px-2"
                    onClick={() => createTask(taskName)}
                > 
                    + ADD
                </button>
            </div>

            {/* TaskCard list render */}
            <div className="mt-4">
                {tasks.map(task => (
                    <div key={task.name} className="">
                        <TaskCard />
                    </div>
                ))}
            </div>
        </>
    )
}