import ActionLink from "@/components/ActionLink";
import Section from "@/components/Section";
import Image from "next/image";
import {BsArrowRight} from 'react-icons/bs'

export default function HeroSection(){
    return(
        <Section 
            id="hero" 
            className=" object-cover relative"
            overlay={
                <div className="bg-gradient-to-b from-white/80 to-white h-full w-full absolute top-0 left-0 to-80%"></div>
            }
        >
            <div 
                className="h-screen px-4 md:px-8 lg:px-16 w-full flex items-center justify-center gap-12 md:gap-16 lg:gap-20 flex-col-reverse lg:flex-row"
            >
                <div className="flex flex-col justify-center items-center lg:block">
                    <p 
                        className="text-2xl md:text-4xl lg:text-6xl text-primary font-bold tracking-widest drop-shadow-sm"
                        data-aos="fade-down-right"
                    >
                        DIL Marketing & Events
                    </p>
                    <p 
                        className="text-normal md:text-2xl text-2xl font-light tracking-wide"
                        data-aos="fade-right"
                    >
                        Your Motto here
                    </p>
                    <ActionLink 
                        href="#"
                        data-aos="fade-up-right"
                    >
                        Email Us {<BsArrowRight className="animate-pulse"/>}
                    </ActionLink>
                </div>
                <Image
                    src="/img/mk.png"
                    height={2000}
                    width={2000}
                    alt=""
                    className="w-[40%] sm:w-[40%] md:w-[60%] lg:w-[100%]"
                    data-aos="fade-left"
                />
            </div>
        </Section>
    )
}