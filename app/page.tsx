import MainTasks from "./MainTasks/page";
import { FaAngleRight } from "react-icons/fa";

export default function Home() {

  return (
    <div className="font-mono text-emerald-500 m-2">
        <p className="font-bold">BEM VINDO, PEDRO!</p>
        <p className="text-xs opacity-70 flex flex-row items-center"> <FaAngleRight /> Cortex Overflow Mk.2</p>
        <div className="h-0.5 w-full bg-emerald-800 my-2"></div>

        <MainTasks />
    </div>
  );
}
