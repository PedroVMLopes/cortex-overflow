import { TaskCard } from "./Components/taskCard";

export default function Home() {
  return (
    <div className="font-mono m-2">
        <p className="font-bold">BEM VINDO, Pedro!</p>
        <p className="text-xs opacity-70">Cortex Overflow Mk.2</p>
        <div className="h-0.5 w-full bg-emerald-800 my-2"></div>

        {/* Input to add a new task */}
        <div className="flex justify-between border border-emerald-950">
          <input 
            type="text" 
            placeholder="Crie uma nova missão..."
            className="bg-black pl-1"
          />
          <button className="bg-emerald-950 p-1 px-2"> + ADD</button>
        </div>
    </div>
  );
}
