import ChipStore from "@/components/ChipStore";
import CurrencyExchange from "@/components/CurrencyExchange";
import { FaAngleRight } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";

export default function Store() {
    return (
        <>
            <div
                id="background" 
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat blur-xs"
                style={{ backgroundImage: "url('/backgrounds/bg18.jpg')" }}
            />
            <div className="bg-black/70 backdrop-blur-2xl flex flex-row items-center justify-between pr-2 text-emerald-50 font-mono">
                <p className="flex flex-row items-center mb-1 p-2"> <FaAngleRight className="text-emerald-500" /> Biotech Supermarket </p>
                <FaMicrochip className="text-emerald-500" />
            </div>
            <div className="text-emerald-50 font-mono">
                <CurrencyExchange />
                <div className="h-10"></div>
                <ChipStore />
            </div>
        </>
    )
}