'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"

const Company = () => {
    return (
        <section id='company' className="z-30 translate-y-1 pt-[150px]">
            <div className="container w-full ">
                <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
                    <motion.div
                        variants={FadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }}

                        className="justify-between ">
                       
                        <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px]'>
                        <span className='under-line uppercase'>Our Team</span></h1>
                        {/* <p className="text-justify ">Coming Soon……….</p> */}

                        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4">
                            <div className="h-48 lg:h-auto lg:w-[250px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-yellow" style={{ ["background-image" as any]: "url('/user.png')" }} >
                            </div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                   
                                    <div className="text-gray-900 font-bold text-xl mb-2 ">Uttam Dwivedi, CEO
                                    </div>
                                    <p className="text-gray-700 text-base text-justify">He completed his bachelor&apos;s degree at IIT Kanpur before joining the Civil Engineering department of the University of Tokyo to pursue a master&apos;s in remote sensing. After graduating, he worked in the innovation division of Ando Hazama Corporation, where he led a team to develop smart construction solutions using artificial intelligence. His approach to technology focuses on creating seamless integrations that blend effortlessly into the background while significantly enhancing user experience and productivity. With extensive experience in consulting and leading generative AI-related projects, he has made substantial contributions to the manufacturing, construction, and management consulting industries, always striving to make technology an invisible yet powerful ally for users.
                                    </p>
                                </div>
            
                            </div>
                        </div>
                        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4">
                            <div className="h-48 lg:h-auto lg:w-[250px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-yellow" style={{ ["background-image" as any]: "url('/rahul.jpg')" }} >
                            </div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                   
                                    <div className="text-gray-900 font-bold text-xl mb-2 ">Rahul Garg, COO

                                    </div>
                                    <p className="text-gray-700 text-base text-justify">Rahul is a seasoned entrepreneur with a strong technical background from IIT Hyderabad and advanced education from the University of Tokyo. With extensive international experience and a deep understanding of both technical and business aspects, he excels in strategic planning, operations management, and driving growth. As COO, Rahul is dedicated to enhancing safety in the construction industry through innovative IT solutions. His leadership and strategic vision are key to our company&apos;s success in delivering cutting-edge technology and ensuring operational excellence.

                                    </p>
                                </div>
            
                            </div>
                        </div>
                        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4">
                            <div className="h-48 lg:h-auto lg:w-[250px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-yellow" style={{ ["background-image" as any]: "url('/koike.jpg')" }} >
                            </div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                   
                                    <div className="text-gray-900 font-bold text-xl mb-2 pt-[40px]">KOIKE TSUNEO, External Advisor

                                    </div>
                                    <p className="text-gray-700 text-base text-justify ">With many years of experience in the construction industry, he is now dedicated to leveraging this expertise to contribute to the field of AI development in the industry. His deep understanding of construction processes and technologies enables him to bring a unique perspective to AI solutions, ensuring they are practical, efficient, and innovative. Committed to driving advancements in construction, he aim to transform the industry and improve safety through his strategic insights.

                                    </p>
                                </div>
            
                            </div>
                        </div>
                        
                   

                    </motion.div>


                </div>
                <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px] pt-[100px]'>
                <span className='under-line uppercase'>Corporate Info</span></h1>
                <motion.div
                        variants={FadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }} className="max-w-sm w-full lg:max-w-full lg:flex mb-4 px-2">

<div className=" bg-secondary rounded-b lg:rounded-b-none lg:rounded-l  p-4 flex flex-col justify-between leading-normal  lg:w-full">

    <div className="py-[100px]">
    <table className="table-auto ">
 
  <tbody >
    <tr className="border-b">
      <td className="py-4 ">Company Name </td>

      <td>: AVETE Pvt Ltd.</td>
    
    </tr>
    <tr className="border-b">
      <td className="py-4 ">Address</td>
      <td>: Tokyo, Koto-Ku, MinamiSunamachi, ７-１-１６</td>
    
    </tr>
    <tr className="border-b">
      <td className="py-4 ">Established</td>
      <td>: 11 November 2022</td>
    
    </tr>
    <tr className="border-b">
      <td className="py-4 ">Capital</td>
      <td>: 1,000,000 Yen</td>
    
    </tr>
  </tbody>
</table>
      
      
    </div>

</div>
<div className="h-48 lg:h-auto lg:w-[600px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ ["background-image" as any]: "url('/map.png')" }} >

</div>
</motion.div>
            </div>
        </section>
    )
}

export default Company