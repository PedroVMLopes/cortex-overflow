'use client'

import React from "react";
import { useState, useEffect } from "react";
import { TaskCardComponent } from "../../components/taskCard";
import { useTasks } from "@/hooks/useTasks";
import { createTask } from "@/services/taskServices";

export default function MainTasks() {

    const [ taskName, setTaskName ] = useState("");
    const { tasks, loading, setTasks, removeTaskById, updateTaskReward, toggleTaskCompletion, toggleTaskAttribute } = useTasks();

    const handleCreateTask = async () => {
        if (!taskName.trim()) return;

        try {
            const newTask = await createTask(taskName, 1); // 1 = ID fixo
            setTasks(prev => [...prev, newTask]);
            setTaskName('');
        } catch (error) {
            alert('Erro ao criar task. Veja o console.');
        }
    };

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
                    onClick={handleCreateTask}
                > 
                    + ADD
                </button>
            </div>

            {/* TaskCard list render */}
            <div className="mt-4">
                {tasks.map( ( task ) => (
                    <TaskCardComponent 
                        key={task.id} 
                        task={task} 
                        onTaskRemove={removeTaskById} 
                        onRewardUpdate={updateTaskReward} 
                        onToggleCompletion={toggleTaskCompletion}
                        onToggleAttribute={toggleTaskAttribute}
                    />
                ))}
            </div>
        </>
    )
}

