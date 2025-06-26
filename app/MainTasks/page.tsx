'use client'

import React from "react";
import { useState } from "react";
import { TaskCardComponent } from "../../components/taskCard";
import { useTasks } from "@/hooks/useTasks";
import { createTask } from "@/services/taskServices";
import { FaAngleRight } from "react-icons/fa";
import { useUserContext } from "@/context/UserContext";


export default function MainTasks() {

    const [ taskName, setTaskName ] = useState("");
    const { tasks, loading, setTasks, removeTaskById, updateTaskReward, toggleTaskCompletion, toggleTaskAttribute } = useTasks();
    const notDailyTasks = tasks.filter((task) => !task.is_daily );
    const now = new Date().getTime();
    const ONE_DAY_MS = 20 * 60 * 60 * 1000; // The day duration was reduced from 24h to 20h

    const { userData } = useUserContext();

    const handleCreateTask = async () => {
        if (!taskName.trim()) return;

        try {
            const newTask = await createTask(taskName, userData?.id, false);
            setTasks(prev => [...prev, newTask]);
            setTaskName('');
        } catch (error) {
            alert('Erro ao criar task. Veja o console.');
        }
    };

    // Excludes from the list the tasks that were completed in more than 24h 
    const filteredTasks = notDailyTasks.filter(task => {
        const createdAt = new Date(task.created_at).getTime();

        // Always shows the unfinished tasks
        if (!task.is_completed) return true;

        // Shows the tasks completed in the last 24h
        return now - createdAt <= ONE_DAY_MS;
    })

    // Orders the tasks according to their completion
    const orderTasks = filteredTasks.sort((a, b) => {
        // Order the uncompleted tasks first
        if(a.is_completed !== b.is_completed) {
            return a.is_completed ? 1 : -1;
        }

        // If the reward is the same sorts by creation date
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    })

    return (
        <div className="pb-16">
            <div
                id="background"
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('/backgrounds/bg4.jpg')" }}
            />

            <div className="fixed top-0 left-0 w-full p-2 z-10 backdrop-blur text-emerald-500 font-mono">
                <p className="font-bold">Welcome, {userData?.name.toUpperCase()}!</p>
                <p className="text-xs opacity-90 flex flex-row items-center text-emerald-50"> <FaAngleRight /> Cortex Overflow Mk.2</p>
                <div className="h-0.5 w-full bg-emerald-800 my-2"></div>

                {/* Input to add a new task */}
                <div className="flex justify-between border border-emerald-800">
                    <input 
                        type="text" 
                        placeholder="[ Crie uma nova missão ]"
                        className="bg-black/80 w-full pl-2"
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
            </div>

            {/* TaskCard list render */}
            <div className="mt-30 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-2">
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
        </div>
    )
}

