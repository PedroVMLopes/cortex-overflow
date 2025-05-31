import ChipStore from "@/components/ChipStore";
import CurrencyExchange from "@/components/CurrencyExchange";
import { FaAngleRight } from "react-icons/fa";

export default function Store() {
    return (
        <>
            <div
                id="background" 
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/backgrounds/bg14.jpg')" }}
            />
            <div className="text-emerald-50 font-mono m-2">
                <p className="text-xs backdrop-blur-2xl rounded-lg flex flex-row items-center mb-1 text-white"> <FaAngleRight /> Biotech_Market </p>
                <div className="h-[2px] bg-emerald-950 w-full mb-2"></div>
                <CurrencyExchange />
                <div className="h-10"></div>
                <ChipStore />
            </div>
        </>
    )
}