'use client'

import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion'

const HeroGlobe = () => {
  return (
    <div className='relative items-center justify-center'>
      

<video
        autoPlay
        loop
        muted
        className=" z-10 w-[100%] xl:w-[700px] min-w-full min-h-full max-w-none "
      >
        <source src="/globe.mp4" type="video/mp4" />
      </video>

           {/* <Image
              src='/logo.png' height={80} width={280} alt='globe'
               className="inset-0 z-80 object-contain xl:mt-[-220px] xl:ml-[210px]
               xl:translate-y-[1px]" style={{ left: '30%',}} />   */}
        </div>
   
  )
}

export default HeroGlobe