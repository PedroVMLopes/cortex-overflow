'use client'

import { useState, useEffect } from "react";
import { TaskCard } from "../Components/taskCard";

export interface Task {
    id: number;
    created_at?: Date;
    name: string;
    attribute?: string;
    silver_reward?: number;
    gold_reward?: number;
    is_completed: boolean;
    user_id: 1;
}

export default function MainTasks() {

    const [ tasks, setTasks ] = useState<Task[]>([])
    const [ taskName, setTaskName ] = useState("");
    
    function createTask(inputName: string): void {
        const numberOfTasks: number = tasks.length;
        
        const newTask: Task = {
            id: numberOfTasks + 1,
            name: inputName,
            attribute: "",
            silver_reward: 0,
            gold_reward: 0,
            is_completed: false,
            user_id: 1
        }
        
        setTasks(prevTasks => [...prevTasks, newTask]);
        setTaskName("");
    }

    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, is_completed: !task.is_completed } : task ));
    }


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
                    onClick={() => createTask(taskName)}
                > 
                    + ADD
                </button>
            </div>

            {/* TaskCard list render */}
            <div className="mt-4">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} onToggleCompletion={toggleTaskCompletion}/>
                ))}
            </div>
        </>
    )
}

