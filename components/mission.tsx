'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"


const Mission = () => {
    return (
        <section id='mission' className="z-30 translate-y-1  pt-[200px]">
            <div className="container w-full " >
                <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
                    <motion.div
                    variants={FadeIn('right', 0.2)}
                    initial= 'hidden'
                    whileInView = {'show'}
                    viewport= {{ once:true , amount: 0.8}}
                    
                    className="justify-between lg:mr-8 lg:w-3/4">
                        <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px]'>
                        <span className='under-line uppercase'>Mission</span></h1>
                        <p className="text-justify ">Our mission is to utilize the vast amounts of data
                            generated on construction sites, to provide context-specific safety recommendations, ensuring <span className="text-yellow font-bold">a safer
                            and more efficient work environment</span>. By promoting
                            continuous learning and implementing advanced
                            safety protocols, we aim to revolutionize the way
                            construction sites operate, enhancing both safety
                            and productivity for all workers.</p>
                            <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px] pt-[30px]'>
                            <span className='under-line uppercase'>Vision</span></h1>
                        <p className="text-justify">We envision a world where advanced data utilization and
                            technology-driven insights make every construction site
                            exceptionally safe and efficient. We aspire to be the
                            foremost platform for intelligent data utilization, setting
                            new standards in safety protocols and continuous learning. </p>
                    </motion.div>
                    <motion.div
                    variants={FadeIn('up', 0.2)}
                    initial= 'hidden'
                    whileInView = {'show'}
                    viewport= {{ once:true , amount: 0.8}}
                    
                    className="flex full flex-col justify-between lg:mr-8 lg:w-1/2 items-center">
                    <Image
              src='/mission-pic.png' height={400} width={400} alt='mission' className="rounded-3xl "
              /> 
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Mission