import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

export default function AboutUsSection(){
    return(
        <Section id="aboutUs" className="bg-background">
            <div className="min-h-screen pt-16 w-full px-4 md:px-8 lg:px-16">
                <div className="grid grid-rows-[max-content,1fr] min-h-screen items-center">
                    <SectionHeader>About Us</SectionHeader>
                    <div className=" w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-2 md:gap-12 xl:gap-16" data-aos="fade-up">
                        <p className="text-xl text-gray-800 text-justify font-light drop-shadow-md">
                            <em className="text-4xl text-primary font-normal">We are</em> a slim and enthusiastic team of social media and public 
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
                            className="object-cover max-w-full h-[250px] md:h-[320px] xl:h-[400px] border-8 border-white w-auto"
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}