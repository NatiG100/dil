import { ReactNode } from "react"

export interface PhilosopyCardProps{
    icon:ReactNode,
    text:string,
    title:string,
    bgMode:"gradient"|"normal",
    idx:number
}
export default function PhilosophyCard({icon,text,title,bgMode,idx}:PhilosopyCardProps){
    return(
        <div 
            className={` 
                max-w-[85%] h-screen max-h-[430px] lg:max-h-[520px] xl:max-h-[580px] w-[320px] xl:w-[360px] px-9 flex flex-col items-center justify-center gap-6
                ${bgMode==="gradient"?"from-[#1AB9CF] to-[#1394B4] bg-gradient-to-br from-40% to-90%":"white"}
                rounded-md shadow-lg border py-8
            `}
            data-aos="flip-right"
            data-aos-delay={idx*150}
        >
            {icon}
            <p className={`uppercase text-2xl font-extrabold tracking-widest ${bgMode==="gradient"?"text-white":"text-primary"}`}>{title}</p>
            <p className={`text-lg drop-shadow-sm text-center ${bgMode==="gradient"?"text-white":"text-gray-600"}`}>{text}</p>
        </div>
    )
}