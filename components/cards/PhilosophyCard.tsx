import { ReactNode } from "react"

export interface PhilosopyCardProps{
    icon:ReactNode,
    text:string,
    title:string,
    bgMode:"gradient"|"normal"
}
export default function PhilosophyCard({icon,text,title,bgMode}:PhilosopyCardProps){
    return(
        <div 
            className={` 
                h-full max-h-[580px] w-[360px] px-9 flex flex-col items-center justify-center gap-6
                ${bgMode==="gradient"?"from-[#1AB9CF] to-[#1394B4] bg-gradient-to-br from-40% to-90%":"white"}
                rounded-md shadow-lg border
            `}
        >
            {icon}
            <p className={`uppercase text-2xl font-bold tracking-widest ${bgMode==="gradient"?"text-white":"text-primary"}`}>{title}</p>
            <p className={`text-xl drop-shadow-sm text-center ${bgMode==="gradient"?"text-[#ebebeb]":"text-[#575757]"}`}>{text}</p>
        </div>
    )
}