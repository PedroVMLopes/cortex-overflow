'use client'

import { useUserContext } from "@/context/UserContext";
import { useTasks } from "@/hooks/useTasks";
import { createTask } from "@/services/taskServices";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function DaylyTasks() {

    const [ taskName, setTaskName ] = useState("");
    const { tasks, loading, setTasks, removeTaskById, updateTaskReward, toggleTaskCompletion, toggleTaskAttribute } = useTasks();
    const dailyTasks = tasks.filter((task) => task.is_daily === true );
    console.table(dailyTasks);
    const now = new Date().getTime();
    const ONE_DAY_MS = 20 * 60 * 60 * 1000; // The day duration was reduced from 24h to 20h

    const { userData } = useUserContext();

    const handleCreateTask = async () => {
        if (!taskName.trim()) return;

        try {
            const newTask = await createTask(taskName, userData?.id, true); // Creates a task with is_undefined === true
            setTasks(prev => [...prev, newTask]);
            setTaskName('');
        } catch (error) {
            alert('Erro ao criar task. Veja o console.');
        }
    };

    return (
        <div className="text-emerald-200 h-[100vh] flex items-center justify-center pb-16">
            <div
                id="background"
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('/backgrounds/bg1.jpg')" }}
            />
            <div>
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
            </div>
        </div>
    )
}