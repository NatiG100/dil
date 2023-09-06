export default function Section({
    id,
    children,
    className,
    overlay
}:{id:string,children:React.ReactNode,className?:string,overlay?:React.ReactNode}){
    return(
        <section 
            id={id}
            className={`h-max min-h-full px-0 md:px-8 lg:px-14 ${className}`}
        >
            {overlay}
            <div className="mx-auto max-w-7xl w-full h-max min-h-full relative top-0 left-0 py-8">
                {children}
            </div>
        </section>
    )
}