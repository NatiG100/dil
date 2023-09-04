import Image from 'next/image'
import { Inter } from 'next/font/google'
import AppBar from '@/components/AppBar'
import HeroSection from '@/sections/HeroSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='block h-screen'>
      <AppBar/>
      <HeroSection/>
    </div>
  )
}
