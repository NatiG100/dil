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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='block h-screen'>
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
