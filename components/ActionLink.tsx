import Link, { LinkProps } from "next/link";

export default function ActionLink(props:LinkProps&{children:React.ReactNode}){
    return(
        <Link 
            {...props} 
            className="flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r 
                from-[#ff512f] via-[#DD2476] to-[#FF512F] text-white text-xl
                 transition-all duration-700 rounded-full shadow-md my-3 w-max min-w-[180px]
                 cursor-pointer hover:bg-right bg-200% font-bold
            "
        />
    )
}
 