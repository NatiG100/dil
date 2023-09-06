import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { ReactNode } from "react";
import {HiSpeakerphone} from 'react-icons/hi'
import {HiMiniPresentationChartBar} from 'react-icons/hi2'
import {RiComputerFill} from 'react-icons/ri'
import {MdEventAvailable} from 'react-icons/md'
import {useState} from 'react'
import {TbCircleFilled} from 'react-icons/tb'

type TypeService = {
    id:string,
    name:string,
    icon:React.ReactNode,
    list:string[],
    img:string
}

const services:TypeService[] = [
    {
        id:"pr",
        name:"Public Relations",
        icon:<HiSpeakerphone/>,
        list:[
            "Plan, develop , and implement PR strategies",
            "Selection of press release venue and all the setups",
            "Monitoring the media",
            "Research ,write and distribute press release to targeted medias",
            "Collect and analyze mediacoverage report"
        ],
        img:"/img/designer.jpeg"
    },
    {
        id:"dm",
        name:"Digital Marketing",
        icon:<RiComputerFill/>,
        list:[
            "SMART Goals",
            "Select target audience",
            "Choose social platforms Track meaningful metrics- i.e. engagement, click-through, and conversionrates.",
            "Identify content pillars",
            "Identify caption directions inline to the brand voice and personality",
            "Identify content design direction",
            "Identify photography/motion graphics directions"
        ],
        img:"/img/designer.jpeg"
    },
    {
        id:"oe",
        name:"Organize Events",
        icon:<MdEventAvailable/>,
        list:[
            "Product lunches concerts",
            "International Festivals",
            "Company Anniversaries",
            "Campaign as Pre-event , Onsight and post-event management",
            "Full report with documentation",
        ],
        img:"/img/designer.jpeg"
    },
    {
        id:"s",
        name:"Sales",
        icon:<HiMiniPresentationChartBar/>,
        list:[
            "Recruiting",
            "Train sales",
            "Distribute sales team for the intended project",
            "Closing deals",
            "Preparing report",
        ],
        img:"/img/designer.jpeg"
    }
]

export default function ServiceSection(){
    const [selected,setSelected] = useState(services[0].id)
    return(
        <Section id="services" className="bg-background">
            <div className="min-h-screen pt-16  w-full px-4 md:px-8 lg:px-16">
                <SectionHeader>Services</SectionHeader>
                <div className="h-full w-full pt-6">
                    <hr/>
                        <div className="my-6 flex items-center justify-center gap-4 flex-wrap">
                            {services.map((service)=>(
                                <ServiceSelector
                                    key={service.id}
                                    icon={service.icon} 
                                    text={service.name}
                                    selected={selected===service.id}
                                    onClick={()=>setSelected(service.id)}
                                />
                            ))}
                        </div>
                    <hr/>
                    {selected===services[0].id&&<ServiceDetail {...services[0]} className="animate-fadeIn"/>}
                    {selected===services[1].id&&<ServiceDetail {...services[1]} className="animate-fadeIn"/>}
                    {selected===services[2].id&&<ServiceDetail {...services[2]} className="animate-fadeIn"/>}
                    {selected===services[3].id&&<ServiceDetail {...services[3]} className="animate-fadeIn"/>}
                </div>
            </div>
        </Section>
    )
}

function ServiceSelector({icon,text,selected,...props}:React.ButtonHTMLAttributes<HTMLButtonElement>&{icon:ReactNode,text:string,selected:boolean}){
    return (
        <button
            {...props}
            className={`
                w-28 lg:w-56 p-4 py-6 flex flex-col items-center justify-center gap-1 lg:gap-4 border
                ${selected?"bg-primary text-white":"bg-white text-[#474747] hover:border-primary/50"} 
                transition-all duration-300 rounded-lg h-28 lg:h-36
            `}
            disabled={selected}
        >
            <span className={`text-xl lg:text-5xl ${selected?"text-white":"text-primary transition-all duration-300"} `}>{icon}</span>
            <p className="text-lg tracking-wide">{text}</p>
        </button>
    )
}

function ServiceDetail(service:TypeService&{className?:string}){
    return (
        <div className={`w-full py-11 flex flex-col-reverse items-center lg:flex-row justify-center lg:items-start gap-8 ${service.className}`}>
            <div className="w-[410px] max-w-[80%]">
                <h1 className="text-3xl text-primary tracking-wide">{service.name}</h1>
                <ul>
                    {service.list.map((item,idx)=>(
                        <p key={idx} className="text-xl text-[#272727] font-light flex items-start">
                            <TbCircleFilled className="text-primary/40 mr-2 text-sm h-full shrink-0 self-center"/>
                            {item}
                        </p>
                    ))}
                </ul>
            </div>
            <Image
                src={service.img}
                height={1200}
                width={1200}
                alt=""
                className=" w-[80%] md:w-[40%] border-8 border-white shadow-lg"
            />
        </div>
    )
}