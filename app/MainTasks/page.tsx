'use client'

import React from "react";
import { useState } from "react";
import { TaskCardComponent } from "../../components/taskCard";
import { useTasks } from "@/hooks/useTasks";
import { createTask } from "@/services/taskServices";

export default function MainTasks() {

    const [ taskName, setTaskName ] = useState("");
    const { tasks, loading, setTasks, removeTaskById, updateTaskReward, toggleTaskCompletion, toggleTaskAttribute } = useTasks();
    const now = new Date().getTime();
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;

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

    // Excludes from the list the tasks that were completed in more than 24h 
    const filteredTasks = tasks.filter(task => {
        const createdAt = new Date(task.created_at).getTime();

        // Always shows the unfinished tasks
        if (!task.is_completed) return true;

        // Shows the tasks completed in the last 24h
        return now - createdAt <= ONE_DAY_MS;
    })

    // Orders the tasks according to their reward and completion
    const orderTasks = filteredTasks.sort((a, b) => {
        // Order the uncompleted tasks first
        if(a.is_completed !== b.is_completed) {
            return a.is_completed ? 1 : -1;
        }

        // Calculates the reward total (10 silver = 1 gold)
        const aReward = a.gold_reward * 10 + a.silver_reward;
        const bReward = b.gold_reward * 10 + b.silver_reward;

        if (aReward !== bReward) {
            return bReward - aReward;
        }

        // If the reward is the same sorts by creation date
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    })

    return (
        <>
            <div
                id="background"
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/backgrounds/bg4.jpg')" }}
            />
            {/* Input to add a new task */}
            <div className="flex justify-between border border-emerald-800">
                <input 
                    type="text" 
                    placeholder="[ Crie uma nova missão ]"
                    className="bg-black/80 w-full text-center sm:pl-1 sm:text-start"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button 
                    className="bg-emerald-950 p-1 px-2 w-fit text-nowrap"
                    onClick={handleCreateTask}
                > 
                    + ADD
                </button>
            </div>

            {/* TaskCard list render */}
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {orderTasks.map( ( task ) => (
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

