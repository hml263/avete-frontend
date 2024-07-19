'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"

const Company = () => {
    return (
        <section id='company' className="z-30 translate-y-1 bg-primary">
            <div className="container w-full py-[50px] lg:py-[100px]">
                <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
                    <motion.div
                        variants={FadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }}

                        className="justify-between ">
                        <h1 className="pb-2 text-[20px] font-medium leading-[3rem]">Our Team</h1>
                        {/* <p className="text-justify ">Coming Soon……….</p> */}

                        <div className="flex flex-wrap">
                            <div className="w-full  xl:w-1/3 mb-4 px-2">  <div className=" rounded overflow-hidden shadow-lg ">

                                <Image
                                    src='/Rahul.jpg' height={400} width={400} alt='mission' className="w-full"
                                />
                                <div className="px-6 py-4 bg-secondary">
                                    <div className="font-bold text-xl mb-2">Uttam Dwivedi, CEO    </div>
                                    <p className="text-white text-base text-justify">
                                        He completed his bachelor&apos;s degree at IIT Kanpur before joining the Civil Engineering department of the University of Tokyo to pursue a master&apos;s in remote sensing...
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 bg-secondary">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View More</span>

                                </div>
                            </div></div>
                            <div className="w-full  xl:w-1/3 mb-4 px-2 "> <div className="xl:max-w-sm rounded overflow-hidden shadow-lg">

                                <Image
                                    src='/Rahul.jpg' height={400} width={400} alt='mission' className="w-full"
                                />
                                <div className="px-6 py-4 bg-secondary">
                                    <div className="font-bold text-xl mb-2">Rahul Garg, COO
                                    </div>
                                    <p className="text-white text-base text-justify">
                                        Rahul is a seasoned entrepreneur with a strong technical background from IIT Hyderabad and advanced education from the University of Tokyo.   ...                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 bg-secondary">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View More</span>

                                </div>
                            </div></div>
                            <div className="w-full  xl:w-1/3 mb-4 px-2">  <div className="xl:max-w-sm rounded overflow-hidden shadow-lg">

                                <Image
                                    src='/Rahul.jpg' height={400} width={400} alt='mission' className="w-full"
                                />
                                <div className="px-6 py-4 bg-secondary">
                                    <div className="font-bold text-xl mb-2">Koike, External Advisor    </div>
                                    <p className="text-white text-base text-justify">
                                        He completed his bachelor&apos;s degree at IIT Kanpur before joining the Civil Engineering department of the University of Tokyo to pursue a master&apos;s in remote sensing...
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 bg-secondary">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">View More</span>

                                </div>
                            </div></div>

                        </div>
                   

                    </motion.div>


                </div>
                <motion.div
                        variants={FadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }} className="max-w-sm w-full lg:max-w-full lg:flex mb-4 px-2">

<div className=" bg-secondary rounded-b lg:rounded-b-none lg:rounded-l  p-4 flex flex-col justify-between leading-normal  lg:w-full">

    <div className="py-[120px]">

        <div className="text-white font-bold text-xl mb-2">Corporate Info
        </div>
        <p className="text-white text-base ">Name: AVETE Pvt Ltd.<br />
            Address: Tokyo, Koto-Ku, MinamiSunamachi, ７-１-１６<br />
            Established:　11 November 2022<br />
            Capital: 10,000,000 Yen
        </p>
    </div>

</div>
<div className="h-48 lg:h-auto lg:w-[600px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ ["background-image" as any]: "url('/office.avif')" }} >
</div>
</motion.div>
            </div>
        </section>
    )
}

export default Company