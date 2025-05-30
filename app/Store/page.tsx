import ChipStore from "@/components/ChipStore";
import CurrencyExchange from "@/components/CurrencyExchange";
import { FaAngleRight } from "react-icons/fa6";

export default function Store() {
    return (
        <div className="text-emerald-500 font-mono m-2">
            <p className="text-xs opacity-70 flex flex-row items-center mb-1 text-white"> <FaAngleRight /> Biotech_Market </p>
            <div className="h-[2px] bg-emerald-800 w-full mb-2"></div>
            <CurrencyExchange />
            <ChipStore />
        </div>
    )
}