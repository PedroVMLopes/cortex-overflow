import MainTasks from "./MainTasks/page";

export default function Home() {
  return (
    <div className="font-mono text-emerald-500 m-2">
        <p className="font-bold">BEM VINDO, Pedro!</p>
        <p className="text-xs opacity-70">Cortex Overflow Mk.2</p>
        <div className="h-0.5 w-full bg-emerald-800 my-2"></div>

        <MainTasks />
    </div>
  );
}
