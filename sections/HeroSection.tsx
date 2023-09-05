import ActionLink from "@/components/ActionLink";
import Section from "@/components/Section";
import Image from "next/image";
import {BsArrowRight} from 'react-icons/bs'

export default function HeroSection(){
    return(
        <Section 
            id="hero" 
            className="bg-[url('/img/designer.jpeg')] object-cover relative"
            overlay={
                <div className="bg-gradient-to-b from-white/80 to-white h-full w-full absolute top-0 left-0 to-80%"></div>
            }
        >
            <div 
                className="h-full w-full flex items-center justify-center gap-20"
            >
                <div className="">
                    <p className="text-6xl text-primary font-bold">DIL Marketing & Events</p>
                    <p className="text-2xl font-light tracking-wide">Your Motto here</p>
                    <ActionLink href="#">Email Us {<BsArrowRight className="animate-pulse"/>}</ActionLink>
                </div>
                <Image
                    src="/img/logo.png"
                    height={1200}
                    width={1200}
                    alt=""
                    className="w-[40%]"
                    
                />
            </div>
        </Section>
    )
}