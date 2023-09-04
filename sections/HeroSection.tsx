import Section from "@/components/Section";
import Image from "next/image";

export default function HeroSection(){
    return(
        <Section id="hero">
            <div className="h-full w-full flex items-center justify-center gap-20">
                <div className="">
                    <p className="text-5xl text-primary font-semibold">DIL Marketing & Events</p>
                    <p className="text-xl">Your Motto here</p>
                </div>
                <Image
                    src="/img/logo.png"
                    height={500}
                    width={500}
                    alt=""
                    className="h-10 w-10 "
                />
            </div>
        </Section>
    )
}