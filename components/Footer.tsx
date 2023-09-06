import Link from "next/link";
import Section from "./Section";
import { NavLink } from "./AppBar";
import {FaPhoneAlt} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import {IoMailSharp} from 'react-icons/io5'
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="w-full h-max shadow-[0_0px_7px_0px_rgba(0,0,0,0.2)]">
            <div className="mx-auto max-w-7xl w-full h-max min-h-full relative top-0 left-o py-8">
                <div className="flex flex-col md:flex-row w-full justify-center gap-8 md:gap-[7%] py-16 items-center md:items-start">
                    <div className="" data-aos="fade-up">
                        <Image
                            src="/img/logo.PNG"
                            height={500}
                            width={500}
                            alt=""
                            className="w-[58px] mx-auto md:mx-0 my-3"  
                        />
                        <p className="text-xl text-primary font-bold tracking-widest text-center md:text-start">DIL Marketing & Events</p>
                        <p className="tracking-widest font-light text-center md:text-start">Your Motto here</p>
                    </div>
                    <ul className="text-gray-600 tracking-wider text-center md:text-start" data-aos="fade-up">
                        <li className="text-gray-800  font-semibold">Navigation</li>
                        <li><Link href="#hero" className="hover:text-gray-900 transition-colors duration-200">Home</Link></li>
                        <li><Link href="#aboutUs" className="hover:text-gray-900 transition-colors duration-200">About Us</Link></li>
                        <li><Link href="#philosophy" className="hover:text-gray-900 transition-colors duration-200">Our Philosophy</Link></li>
                        <li><Link href="#services" className="hover:text-gray-900 transition-colors duration-200">Services</Link></li>
                        <li><Link href="#work" className="hover:text-gray-900 transition-colors duration-200">Work</Link></li>
                        <li><Link href="#contact" className="hover:text-gray-900 transition-colors duration-200">Contact Us</Link></li>
                    </ul>
                    <ul className="text-gray-600 tracking-wider max-w-[250px] text-center md:text-start" data-aos="fade-up">
                        <li className="text-gray-800  font-semibold">Contact</li>
                        <li className="flex gap-2 justify-center md:justify-start"><FaPhoneAlt className="shrink-0 mt-2 text-sm"/>+251-911-791-208</li>
                        <li className="flex gap-2 justify-center md:justify-start"><FaPhoneAlt className="shrink-0 mt-2 text-sm"/>+251-955-997-385</li>
                        <li className="flex gap-2 justify-center md:justify-start"><IoMailSharp className="shrink-0 mt-2 text-sm"/>fevenyehayes@gmail.com</li>
                        <li className="flex gap-2 justify-center md:justify-start"><IoMailSharp className="shrink-0 mt-2 text-sm"/>yafetmeraya@outlook.com</li>
                        <li className="flex gap-2 justify-center md:justify-start"><FaLocationDot className="shrink-0 mt-2 text-sm"/>Bole , office no:231,B28 Addis Ababa, Ethiopia</li>
                    </ul>
                </div>
                <hr/>
                <p className="text-center w-full text-sm font-light tracking-widest my-3 mt-4 text-[#006882]">
                    Copyright © 2023 Dil Marketing & Events. All rights reserved
                </p>
            </div>
        </footer>
    )
}