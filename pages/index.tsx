import Image from 'next/image'
import { Inter } from 'next/font/google'
import AppBar from '@/components/AppBar'
import HeroSection from '@/sections/HeroSection'
import AboutUsSection from '@/sections/AboutUsSection'
import PhilosophySection from '@/sections/PhilosophySection'
import ServiceSection from '@/sections/ServiceSection'
import WorkSection from '@/sections/WorkSection'
import ContactSection from '@/sections/ContactSection'
import Footer from '@/components/Footer'
import {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=>{
    AOS.init({duration:1000,anchorPlacement:"bottom-center",offset:50})
    AOS.refresh();
  },[])
  return (
    <div className='block h-screen '>
      <AppBar/>
      <HeroSection/>
      <AboutUsSection/>
      <PhilosophySection/>
      <ServiceSection/>
      <WorkSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}
