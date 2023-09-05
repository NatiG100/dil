import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

export default function AboutUsSection(){
    return(
        <Section id="aboutUs" className="bg-background">
            <div className="h-full w-full grid grid-rows-[max-content,1fr]">
                <SectionHeader>About Us</SectionHeader>
                <div className="h-full w-full flex items-center justify-center gap-12">
                    <p className="text-xl text-[#272727] text-justify">
                        We are a slim and enthusiastic team of social media and public 
                        relations specialists. We are a devoted team of visualizers, 
                        copywriters, and strategists focusing on all kinds of 
                        communicationto help our clients establish,  maintain, 
                        and manage their reputation. Not only do we implement 
                        social media campaigns, but we also conduct ongoing 
                        research on the social media business in order to better 
                        serve our clients.
                    </p>
                    <Image
                        src="/img/designer.jpeg"
                        height={1200}
                        width={1200}
                        alt=""
                        className="h-[44%] border-8 border-white shadow-lg"
                        
                    />
                </div>
            </div>
        </Section>
    )
}