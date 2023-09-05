export default function Section({
    id,
    children,
    className,
    overlay
}:{id:string,children:React.ReactNode,className?:string,overlay?:React.ReactNode}){
    return(
        <section 
            id={id}
            className={`h-full max-h-max px-14 pt-16 ${className}`}
        >
            {overlay}
            <div className="mx-auto max-w-7xl w-full h-full relative top-0 left-o">
                {children}
            </div>
        </section>
    )
}