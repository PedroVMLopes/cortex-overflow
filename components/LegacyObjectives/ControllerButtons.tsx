import Button from "@/components/KeyboardButton";

export default function ControllerButtons() {
    return (
        <div className="flex flex-row gap-2 mt-4">
            <Button className="w-full border-b-sky-900 border-sky-800 border-t-sky-600 shadow-sky-800 text-sky-200 from-sky-900/80 to-sky-400/30">START</Button>
            <Button className="w-full border-b-yellow-900 border-yellow-800 border-t-yellow-600 shadow-yellow-800 text-yellow-200 from-yellow-900/80 to-yellow-400/30">PAUSE</Button>
            <Button className="w-full border-b-red-900 border-red-800 border-t-red-600 shadow-red-800 text-red-200 from-red-900/80 to-red-400/30">FINISH</Button>
        </div>
    )
}