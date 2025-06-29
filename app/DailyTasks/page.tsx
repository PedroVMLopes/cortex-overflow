'use client'

import { TaskCardComponent } from "@/components/taskCard";
import { useUserContext } from "@/context/UserContext";
import { useTasks } from "@/hooks/useTasks";
import { createTask, updateCompletionOnDB } from "@/services/taskServices";
import { updateLastReset } from "@/services/userServices";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function DaylyTasks() {

    const { userData } = useUserContext();

    const [ taskName, setTaskName ] = useState("");
    const { tasks, loading, setTasks, removeTaskById, updateTaskReward, toggleTaskCompletion, toggleTaskAttribute } = useTasks();
    const dailyTasks = tasks.filter((task) => task.is_daily === true );
    
    const today = new Date().toISOString().slice(0, 10);
    const lastReset = userData?.last_reset.toString().slice(0, 10);
    const isNextDay = today !== lastReset;

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

    if ( isNextDay && userData ) {
        dailyTasks.forEach((task) => {
            updateCompletionOnDB(task.id, userData.id, false, false)
        })
        updateLastReset(userData.id, today);
    }

    return (
        <div className="pb-16">
            <div
                id="background"
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: "url('/backgrounds/bg1.jpg')" }}
            />
            <div>
                <div className="fixed top-0 left-0 w-full p-2 z-10 backdrop-blur text-emerald-500 font-mono">
                    <p className="text-xs opacity-90 flex flex-row items-center text-emerald-50"> <FaAngleRight /> Missões Diárias </p>
                    <div className="h-0.5 w-full bg-emerald-800 my-2"></div>
    
                    {/* Input to add a new task */}
                    <div className="flex justify-between border border-emerald-800">
                        <input 
                            type="text" 
                            placeholder="[ Crie uma missão diária ]"
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

            {/* TaskCard list render */}
            <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-2">
                {dailyTasks.map((task) => (
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