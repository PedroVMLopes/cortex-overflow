import ChipStore from "@/components/ChipStore";
import CurrencyExchange from "@/components/CurrencyExchange";
import { FaAngleRight } from "react-icons/fa";

export default function Store() {
    return (
        <>
            <div
                id="background" 
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat blur-xs"
                style={{ backgroundImage: "url('/backgrounds/bg10.jpg')" }}
            />
            <div className="bg-black/70 backdrop-blur-lg flex flex-row items-center justify-between text-emerald-50 font-mono fixed w-full top-0 z-10">
                <p className="flex flex-row items-center mb-1 px-2 py-1"> <FaAngleRight className="text-emerald-500" /> Biotech Supermarket </p>
            </div>
            <div className="text-emerald-50 font-mono m-2 mt-12">
                <CurrencyExchange />
                <div className="h-10"></div>
                <ChipStore />
            </div>
        </>
    )
}