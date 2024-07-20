'use client'

import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion'

const HeroGlobe = () => {
  return (
    <div className='relative items-center justify-center'>
       <Image
              src='/test.gif' height={450} width={450} alt='globe'
               className="inset-0 z-80 object-contain
               xl:translate-y-[1px]" />  
          
        </div>
   
  )
}

export default HeroGlobe