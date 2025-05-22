import { TaskCard } from "./Components/taskCard";

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
    is_completed: false,
    user_id: 1
  }
  tasks.push(newTask);
}

export default function Home() {
  return (
    <div className="font-mono text-emerald-500 m-2">
        <p className="font-bold">BEM VINDO, Pedro!</p>
        <p className="text-xs opacity-70">Cortex Overflow Mk.2</p>
        <div className="h-0.5 w-full bg-emerald-800 my-2"></div>

        {/* Input to add a new task */}
        <div className="flex justify-between border border-emerald-900">
          <input 
            type="text" 
            placeholder="Crie uma nova missão..."
            className="bg-black pl-1"
          />
          <button className="bg-emerald-950 p-1 px-2"> + ADD</button>
        </div>

        {/* TaskCard list render */}
        <div className="mt-4">
          {tasks.map(task => (
            <div className="bg-amber-300">
              {task.name}
            </div>
          ))}
        </div>
    </div>
  );
}
