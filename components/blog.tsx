'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"

const Blog = () => {
    return (
        <section id='blog' className="z-30 translate-y-1 pt-[150px]">
            <div className="container w-full ">
                <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
                    <motion.div
                        variants={FadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }}

                        className="justify-between ">
                             <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px]'>
                             <span className='under-line uppercase'>News/Blog</span></h1>

                             <div className="w-full  xl:w-1/3 mb-4 px-2">  <div className=" rounded overflow-hidden shadow-lg ">

<Image
    src='/mission-pic.png' height={200} width={200} alt='mission' className="w-full"
/>
<div className="px-6 py-4 bg-secondary">
    <div className="font-bold text-xl mb-2">Lorem ipsum dolor</div>
    <p className="text-white text-base text-justify">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
</div>
{/* <div className="px-6 pt-4 pb-2 bg-secondary">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View More</span>

</div> */}
</div></div>
                      
                        {/* <p className="text-justify ">Coming Soon……….</p> */}
                        
                    

                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Blog