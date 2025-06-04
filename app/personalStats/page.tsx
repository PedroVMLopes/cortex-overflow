'use client'
import { FaAngleRight } from "react-icons/fa";
import { useUserContext } from "@/context/UserContext";
import Auth from "@/components/Auth";
import LogoutButton from "@/components/LogoutButton";
import { useUserAttributes } from "@/hooks/useUserAttributes";

type Attribute = { attShort: string, attLong: string, borderColor: string, bgColor: string }

const attributes: Attribute[] = [
    {attShort: 'STR', attLong: 'Força', borderColor: 'border-yellow-400', bgColor: 'bg-yellow-300'},
    {attShort: 'DEX', attLong: 'Destreza', borderColor: 'border-green-400', bgColor: 'bg-green-300'},
    {attShort: 'CON', attLong: 'Constituição', borderColor: 'border-red-400', bgColor: 'bg-red-300'},
    {attShort: 'WIZ', attLong: 'Sabedoria', borderColor: 'border-orange-400', bgColor: 'bg-orange-300'},
    {attShort: 'INT', attLong: 'Inteligência', borderColor: 'border-blue-400', bgColor: 'bg-blue-300'},
    {attShort: 'CHA', attLong: 'Carisma', borderColor: 'border-pink-400', bgColor: 'bg-pink-300'},
];

export default function personalStats() {

    const { userData } = useUserContext();
    const { userAttributes, loading } = useUserAttributes();

    const mergedAttributes =  userAttributes.map((att) => {
        const localInfo = attributes.find(a => a.attShort === att.attribute);
        return {
            ...att,
            attLong: localInfo?.attLong,
            borderColor: localInfo?.borderColor,
            bgColor: localInfo?.bgColor,
        }
    })
    
    return (
        <>
            <div
                id="background"
                className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/backgrounds/bg17.jpg')" }}
            />
            <div className="text-emerald-500 font-mono m-2">
                {/* Top Info Box */}
                <p className="text-sm backdrop-blur-2xl rounded-lg flex flex-row items-center mb-1 text-white"> <FaAngleRight /> Histórico de Sinapses_ </p>
                <div id="introductionBox" className="w-full flex flex-col border border-emerald-800 bg-black/90 p-3">
                    <p className="text-xs opacity-80">SUBJECT NAME</p>
                    <div className="flex flex-row justify-between items-end">
                        <h1 className="font-semibold"> {userData?.name.toUpperCase()}</h1>
                        <p className="text-xs text-white flex flex-row"> <span className="opacity-60 mr-1">NÍVEL:</span> <span>{userData?.account_level}</span> </p>
                    </div>
                </div>

                {/* Attribute boxes */}
                <h1 className="mt-3 pl-1 font-bold text-emerald-200">ATRIBUTOS</h1>
                <div className="h-0.5 w-full bg-emerald-800 mb-2 mt-1"></div>
                <div id="attributeBoxes" className="grid grid-cols-2 gap-2">
                    {loading ? <div className="text-emerald-200">Loading...</div> /* Loading Text */
                        : mergedAttributes.map(att => (
                            // Attribute Box
                            <div key={att.attribute} className={`border border-emerald-900 bg-black p-2`}>
                                <div className="flex flex-row justify-between items-end text-sm text-white">
                                    <p className="">{att.attLong}</p>
                                    <p className="text-base flex flex-row items-end"> <span className="text-xs pb-0.5 pr-0.5 opacity-60">lv</span> <span>{att.level}</span> </p>
                                </div>
                                {/* Progress Bar */}
                                <div className={`border ${att.borderColor} my-1.5 h-2`}>
                                    <div className={`h-full ${att.bgColor} `} style={{ width: `${att.xp}%`}}></div>
                                </div>
                                <div className="w-full flex justify-end">
                                    <p className="text-xs text-gray-500"> <span className="text-emerald-50">{att.xp}</span>/100 </p>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="w-full flex justify-end mt-2 gap-2">
                    {/* Adds the auth button if the user is not connected */}
                    { userData ? <LogoutButton /> : <Auth /> }
                </div>
            </div>
        </>
    )
}