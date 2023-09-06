import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import {FaPhoneAlt} from 'react-icons/fa';
import {IoMailSharp} from 'react-icons/io5'

export default function ContactSection(){
    return(
        <Section id="contact" className="bg-background">
            <div className="min-h-screen pt-16 w-full grid grid-rows-[max-content,1fr]">
                <SectionHeader>Contact Us</SectionHeader>
                <div className="mx-auto h-full w-full max-w-3xl flex items-center justify-center gap-12 flex-col">
                    <div className="flex-col flex gap-6">    
                        <p className="text-5xl text-primary tracking-widest font-semibold text-center">
                            We're here to help!
                        </p>
                        <p className="text-gray-900 font-light text-xl max-w-xl text-center drop-shadow-md tracking-widest">
                            Please feel free to contact us with any 
                            questions or concerns about our services
                        </p>
                    </div>
                    <div className="flex-col flex gap-6 flex-wrap">
                        <div className="flex items-center justify-center w-full gap-4">
                            <FaPhoneAlt className="text-primary text-2xl"/>
                            <p className="text-white bg-gray-600 p-2 tex-lg rounded-md px-5">+251-911-791-208</p>
                            <p className="text-white bg-gray-600 p-2 tex-lg rounded-md px-5">+251-955-997-385</p>
                        </div>
                        <div className="flex items-center justify-center w-full gap-4 flex-wrap">
                            <IoMailSharp className="text-primary text-2xl"/>
                            <p className="text-white bg-gray-600 p-2 tex-lg rounded-md px-5">fevenyehayes@gmail.com</p>
                            <p className="text-white bg-gray-600 p-2 tex-lg rounded-md px-5">yafetmeraya@outlook.com</p>
                        </div>
                    </div>
                   <p className="text-gray-800 text-xl max-w-xl text-center drop-shadow-md tracking-widest">
                        Bole , office no:231,B28 Addis Ababa, Ethiopia
                    </p>
                </div>
            </div>
        </Section>
    )
}