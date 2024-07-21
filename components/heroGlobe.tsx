'use client'

import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion'

const HeroGlobe = () => {
  return (
    <div className='relative items-center justify-center'>
       {/* <Image
              src='/globe.gif' height={600} width={2000} alt='globe'
               className="inset-0 z-80 object-contain
               xl:translate-y-[1px]" />   */}

<video
        autoPlay
        loop
        muted
        className=" z-10 w-[700px] min-w-full min-h-full max-w-none"
      >
        <source src="/globe.mp4" type="video/mp4" />
      </video>

          
        </div>
   
  )
}

export default HeroGlobe