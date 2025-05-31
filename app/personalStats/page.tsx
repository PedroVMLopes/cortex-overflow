import { FaAngleRight } from "react-icons/fa";

type Attribute = { attShort: string, attLong: string, color: string }

const attributes: Attribute[] = [
    {attShort: 'STR', attLong: 'Força', color: 'border-yellow-300'},
    {attShort: 'DEX', attLong: 'Destreza', color: 'border-green-300'},
    {attShort: 'CON', attLong: 'Constituição', color: 'border-red-300'},
    {attShort: 'WIZ', attLong: 'Sabedoria', color: 'border-orange-300'},
    {attShort: 'INT', attLong: 'Inteligência', color: 'border-blue-300'},
    {attShort: 'CHA', attLong: 'Carisma', color: 'border-pink-300'},
];

export default function personalStats() {
    return (
        <>
            <div
                id="background"
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/backgrounds/bg17.jpg')" }}
            />
            <div className="text-emerald-500 font-mono m-2">
                <p className="text-xs backdrop-blur-2xl rounded-lg flex flex-row items-center mb-1 text-white"> <FaAngleRight /> Histórico de Sinapses_ </p>
                <div id="introductionBox" className="w-full flex flex-col border border-emerald-800 bg-black/90 p-3">
                    <p className="text-xs opacity-80">SUBJECT NAME</p>
                    <div className="flex flex-row justify-between items-end">
                        <h1 className="">PEDRO</h1>
                        <p className="text-xs text-white flex flex-row"> <span className="opacity-60 mr-1">NÍVEL:</span> <span>0</span> </p>
                    </div>
                </div>
                <h1 className="mt-3 pl-1 font-bold">ATRIBUTOS</h1>
                <div className="h-0.5 w-full bg-emerald-800 mb-2 mt-1"></div>
                <div id="attributeBoxes" className="grid grid-cols-2 gap-2">
                    {attributes.map(att => (
                        <div key={att.attShort} className={`border border-emerald-800 bg-black p-2`}>
                            <div className="flex flex-row justify-between items-end text-xs text-white">
                                <p className="">{att.attLong}</p>
                                <p className="text-base flex flex-row items-end"> <span className="text-xs pb-0.5 pr-0.5 opacity-60">lv</span> <span>0</span> </p>
                            </div>
                            <div className={`border ${att.color} my-0.5 h-1`}>
                                {/* Passar a porcentagem do level como width dessa div p/ preencher a barra */}
                                <div className="h-full w-[20%] bg-amber-50"></div>
                            </div>
                            <div className="w-full flex justify-end">
                                <p className="text-xs text-white opacity-40"> 0/100 </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}