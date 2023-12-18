import Image from "next/image";
import { ReactNode } from "react";
import {TfiMenu} from 'react-icons/tfi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {useState} from 'react'
import {Link} from 'react-scroll'

export default function AppBar({top}:{top:boolean}){
    const [show,setShow] = useState(false)
    function toggleVisibility(){
        setShow((show)=>(!show))
    }
    
    return(
        <>
            <nav className={`
                w-full fixed top-0 left-0
                ${top?"bg-transparent":"bg-white shadow-sm"} px-6 md:px-16 z-10
            `} 
            >
                <div className="
                        ml-auto mr-auto w-full max-w-7xl h-20
                        flex items-center justify-between

                    "
                >
                    <div className="flex h-full items-center gap-3">
                        <Image
                            src="/img/logo.PNG"
                            height={1200}
                            width={1200}
                            alt=""
                            className="h-14 w-14 bg-blend-difference"
                            
                        />
                        <p className="font-semibold text-gray-700 text-xl">DIL <span className="text-base text-primary font-normal tracking-widest">Marketing</span></p>
                    </div>
                    <button className="block md:hidden text-xl text-gray-600 hover:text-gray-900 transition-all" onClick={toggleVisibility}>
                        <TfiMenu className=""/>
                    </button>
                    <div className="hidden md:flex items-center gap-6 text-primary/70 justify-between text-lg h-full">
                        <NavLink href="#aboutUs" to="aboutUs">About Us</NavLink>
                        <NavLink href="#philosophy" to="philosophy">Our Philosophy</NavLink>
                        <NavLink href="#services" to="services">Services</NavLink>
                        <NavLink href="#work" to="work">Work</NavLink>
                        <NavLink href="#contact" to="contact">Contact Us</NavLink>
                    </div>
                </div>
            </nav>
            <MobileNavigationModal show={show} toggle={toggleVisibility}/>
        </>
    )
}

export function NavLink({href,children,onClick,to}:{href:string,children:ReactNode,onClick?:()=>void,to:string}){
    return(

        <Link 
            to={to} 
            className="
                h-full flex items-center border-t-transparent
                transition-color duration-100 text-gray-900 hover:text-primary cursor-pointer
            "
            onClick={onClick}
            spy={true}
            activeClass="text-primary border-y-4 border-primary/50"
            smooth={true}
        >
            {children}
        </Link>
    )
}

export function MobileNavigationModal({show,toggle}:{show:boolean,toggle:()=>void}){
    return(
        <nav className={`
            fixed top-0 left-0 h-full w-screen 
            ${show?"opacity-100 top-0":"top-[-100%] opacity-50"} 
            transition-all duration-300 bg-white z-30
            flex flex-col px-20 justify-center items-center
            gap-8 overflow-hidden
        `} >
            <div className="">
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
            <div className="flex flex-col items-center gap-2 text-primary/70 justify-between text-lg h-max">
                <NavLink href="#aboutUs" onClick={toggle} to="aboutUs">About Us</NavLink>
                <NavLink href="#philosophy" onClick={toggle} to="philosophy">Our Philosophy</NavLink>
                <NavLink href="#services" onClick={toggle} to="services">Services</NavLink>
                <NavLink href="#work" onClick={toggle} to="work">Work</NavLink>
                <NavLink href="#contact" onClick={toggle} to="contact">Contact Us</NavLink>
            </div>
            <button className={`${show?"opacity-100":"-top-[1vh] opacity-0"} mx-4 fixed top-4 right-4 block md:hidden text-4xl text-gray-400 hover:text-gray-600 transition-all`} onClick={toggle}>
                <AiFillCloseCircle className=""/>
            </button>
        </nav>
    )
}