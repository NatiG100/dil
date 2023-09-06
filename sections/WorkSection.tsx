import ActionLink from "@/components/ActionLink";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { useState } from "react";
import {BsFillCalendarFill} from 'react-icons/bs'
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'

const companyLogos = [
    {img:"/img/logo/d.jpg"},
    {img:"/img/logo/era.png"},
    {img:"/img/logo/Heinken.png",height:"h-24"},
    {img:"/img/logo/m.png"},
    {img:"/img/logo/walia.jpg"},
    {img:"/img/logo/yetebaberut.jpg"},
]
const designs = [
    {img:"/img/designs/1.png"},
    {img:"/img/designs/2.png"},
    {img:"/img/designs/3.png",height:"h-24"},
    {img:"/img/designs/4.png"},
    {img:"/img/designs/5.png"},
    {img:"/img/designs/6.png"},
    {img:"/img/designs/7.png"},
    {img:"/img/designs/8.png"},
    {img:"/img/designs/8.png"},
    {img:"/img/designs/8.png"},
    {img:"/img/designs/8.png"},
    {img:"/img/designs/8.png"},
    {img:"/img/designs/7.png"},
    {img:"/img/designs/7.png"},
    {img:"/img/designs/7.png"},
    {img:"/img/designs/7.png"},
]

const recentWorks:RecentWorkProps[]=[
    {
        company:"NHRCC",
        description:"Diplomatic bazar, champions league, Addis Ababa bottle launch",
        date:"2016/17"
    },
    {
        company:"Heineken ",
        description:"PR and resource mobilization",
        date:"2016/17"
    },
    {
        company:"Walia Beer",
        description:"various in-door and out dooractivations",
        date:"2019-2020"
    },
    {
        company:"Rototom Sun splash ",
        description:"international reggae festival, Spain",
        date:"2017"
    },
    {
        company:"Yetebaberut Petroleum SC",
        description:"10th year anniversary",
        date:"2014"
    },
    {
        company:"ERA",
        description:"ground breaking ceremony at jigjiga and gimba tenta",
        date:"2019"
    },
    {
        company:"Meta Abo beer",
        description:"concerts with Nigeria nsingers P-Square",
        date:"2015"
    },
    {
        company:"Dashin Beer",
        description:"organizing monthly poetic Jazz@ harmony Hotel",
        date:"2016"
    },
    {
        company:"Malta Guinness",
        description:"launching at millennium hall",
        date:"2014"
    }
]

export default function WorkSection(){
    const [more,setMore] = useState(false);
    function handleShowMore(e:React.MouseEvent<HTMLButtonElement>){
        setMore((more)=>(!more))
    }
    return(
        <Section id="work" className="pt-16">
            <SectionHeader>work</SectionHeader>
            <p className="my-6 text-2xl tracking-wider text-primary drop-shadow-sm">Recent Work</p>
            <div className="grid grid-cols-3 grid-rows-3 justify-center mx-auto w-max gap-6 my-12">
                {recentWorks.map((recentWork,idx)=>(
                    <RecentWork key={idx} {...recentWork}/>
                ))}
            </div>
            <p className="my-6 text-2xl tracking-wider text-primary drop-shadow-sm">Companies we worked with</p>
            <div className="justify-center mx-auto gap-6 my-12  items-center grid grid-cols-3 w-full px-12 py-16">
                {companyLogos.map((logo)=>(
                    <Image
                        src={logo.img}
                        height={1200}
                        width={1200}
                        alt=""
                        className={` ${logo.height?logo.height:"h-36"} w-auto self-center`}
                    />
                ))}
            </div>
            <p className="my-6 text-2xl tracking-wider text-primary drop-shadow-sm">Branding & Creative design</p>
            <div className="justify-center mx-auto gap-6 my-12  items-center grid grid-cols-4 w-full px-12">
                {(more?designs:designs.slice(0,8)).map((logo)=>(
                    <Image
                        src={logo.img}
                        height={1200}
                        width={1200}
                        alt=""
                        className={` 
                            h-64 w-64 object-cover hover:scale-105
                            self-center rounded-md overflow-hidden border 
                            hover:shadow-sm
                            transition-all duration-300
                        `}
                    />
                ))}
            </div>
            <hr/>
            <div className="w-full">
                <div className="w-max mx-auto">
                    <button 
                        onClick={handleShowMore}
                        className="
                            flex items-center justify-center gap-1 text-lg text-primary border border-primary px-3 py-1
                            rounded-full hover:bg-primary/5 transition-colors duration-300 my-4
                        "
                    >{more?"Show Less":"Show More"} {more?<FiChevronUp className="font-extrabold mt-1"/>:<FiChevronDown className="font-extrabold mt-1"/>}</button>
                </div>
            </div>
        </Section>
    )
}

interface RecentWorkProps{
    company:string,
    date:string,
    description:string
}
function RecentWork({company,date,description}:RecentWorkProps){
    return(
        <div className="w-80 border px-6 py-4 bg-[#f5f5f5] rounded-md flex flex-col items-start justify-center h-36">
            <p className="text-lg text-primary">{company}</p>
            <p className="text-[#272727] text-lg font-light h-full">{description}</p>
            <p className="text-sm font-light text-[#474747] flex items-center"><BsFillCalendarFill className="inline mr-2 h-full self-center"/>{"  "+date}</p>
        </div>
    )
}