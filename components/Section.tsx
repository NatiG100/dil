export default function Section({id,children}:{id:string,children:React.ReactNode}){
    return(
        <section 
            id="string"
            className=" h-full max-h-max px-14"
        >
            <div className="mx-auto max-w-7xl w-full h-full">
                {children}
            </div>
        </section>
    )
}