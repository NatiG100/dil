import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function(){
    return(
        <nav className="
            w-full fixed top-0 left-0
            bg-white shadow-md px-16 z-10
        ">
            <div className="
                    ml-auto mr-auto w-full max-w-7xl h-16
                    flex items-center justify-between

                "
            >
                <Image
                    src="/img/logo.png"
                    height={1200}
                    width={1200}
                    alt=""
                    className="h-14 w-14 bg-blend-difference"
                />
                <div className="flex items-center gap-6 text-primary/70 justify-between text-lg h-full">
                    <NavLink href="#aboutUs" >About Us</NavLink>
                    <NavLink href="#philosophy" >Our Philosophy</NavLink>
                    <NavLink href="#services" >Services</NavLink>
                    <NavLink href="#work" >Work</NavLink>
                    <NavLink href="#contact" >Contact Us</NavLink>
                </div>
            </div>
        </nav>
    )
}

export function NavLink({href,children}:{href:string,children:ReactNode}){
    return(
        <Link 
            href={href} 
            className="
                h-full flex items-center active:border-y-4 border-primary/50 border-t-transparent
                transition-color duration-100 hover:text-primary
            "
        >
            {children}
        </Link>
    )
}