import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import PhilosophyCard from "@/components/cards/PhilosophyCard";
import Image from "next/image";
import {PiLightbulbFilamentFill} from 'react-icons/pi'
import {AiFillEye} from 'react-icons/ai'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'

export default function PhilosophySection(){
    return(
        <Section id="philosophy" className="bg-white">
            <div className="min-h-screen pt-16  w-full grid grid-rows-[max-content,1fr] px-4 md:px-8 lg:px-16">
                <SectionHeader>OUR PHILOSOPHY</SectionHeader>
                <div className="h-max min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:flex-wrap mt-6">
                    <PhilosophyCard
                        icon={<PiLightbulbFilamentFill className="text-[130px] text-white"/>}
                        title="mission"
                        text="
                            The company's mission is to pursue 
                            excellence in the delivery of quality 
                            PR, Marketing and event organizing solution.
                        "
                        bgMode="gradient"
                       idx={0} 
                    />
                    <PhilosophyCard
                        icon={<AiFillEye className="text-[130px] text-primary"/>}
                        title="vision"
                        text="
                            To be one of the best PR, Marketing and event organizing company in Ethiopia.
                        "
                        bgMode="normal"
                        idx={1}
                    />
                    <PhilosophyCard
                        icon={<RiMoneyDollarCircleFill className="text-[130px] text-white"/>}
                        title="VALUES"
                        text="
                            we honor our commitment through synergizing 
                            the resources we have to bring satisfaction 
                            for customers and sustain profitability of 
                            the company .at while, celebrating the sheer 
                            loveand joy of the event bring toour customers
                        "
                        bgMode="gradient"
                        idx={2}
                    />
                </div>
            </div>
        </Section>
    )
}