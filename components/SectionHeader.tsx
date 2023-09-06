import { ReactNode } from "react";

export default function SectionHeader({children}:{children:ReactNode}){
    return(
        <p className="w-full text-center tracking-widest text-3xl font-bold uppercase text-gray-900 my-3">{children}</p>
    )
}