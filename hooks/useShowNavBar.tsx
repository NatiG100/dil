import { useEffect, useState } from "react";

interface UseShowNavBarProps{
    topOffset?:number
}

export default function useShowNavBar({topOffset=60}:UseShowNavBarProps){
    const [displayNav, setDisplayNav] = useState(true);
    const [isScrollAtTop, setIsScrollAtTop] = useState(true);
    useEffect(()=>{
        let prevYPos = window.scrollY;
        const scrollHandler = (event:any)=>{
            let currentScrollPos = window.scrollY;
            setIsScrollAtTop(window.scrollY<topOffset); // set isScrollAtTop to true when scroll pos Y is less than 20px
            let delta = currentScrollPos - prevYPos;
            prevYPos = currentScrollPos;
            if(delta<0){
            setDisplayNav(true);
            }else if(delta>0){
            setDisplayNav(false);
            }
        }
        document.addEventListener('scroll',scrollHandler);
        return ()=>document.removeEventListener('scroll', scrollHandler);
    },[]);
    return{
        isScrollAtTop,
        displayNav,
    }
}