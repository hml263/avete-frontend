'use client'
import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from 'framer-motion'
import FadeIn from "@/lib/variants"

const Product = () => {
  const t = useTranslations('Product')
  return (
    <section id='product' className="z-30 translate-y-1 pt-[150px]">
      <div className="container w-full ">
        <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0 mb-[150px]">
          <div
            className="justify-between lg:mr-8 ">
            <h1 className='text-[30px] font-medium  leading-[3rem] pb-[30px]'>
              <span className='under-line uppercase'>Seeing with Insight</span></h1>


            <p className="text-justify ">{t('p-description')}

            </p>


          </div>

        </div>
        <table className="hidden xl:flex table-auto mb-[150px]  items-center justify-center ">
          <tbody>
            <tr>
              <td> <div className=" vertical-text relative bottom-4">{t('p-glass')}</div></td>
              <td> <Image src='/img-01.png' height={150} width={150} alt='mission' className="relative right-[80px] bottom-[80px] rounded-xl" /></td>
              <td><div className="w-[80px] h-[1px] bg-white relative right-[80px] bottom-[75px]"></div></td>
              <td><Image src='/img-04.png' height={90} width={100} alt='mission' className="relative right-[80px] bottom-[80px] rounded-xl" /></td>
              <td>
                {/* <div className="w-[80px] h-[1px] bg-white relative right-[80px] bottom-[75px]"></div> */}
              </td>
              <td></td>
              <td></td>
              <td><div className="w-[300px] text-center font-bold text-[24px] text-xl relative right-[100px]  ">{t('protocols')}<br />
                ⇩
              </div></td>

            </tr>
            <tr>
              <td><div className=" vertical-text relative top-16 ">{t('p-glass')}</div></td>
              <td><Image src='/img-02.png' height={150} width={150} alt='mission' className="relative right-[80px] bottom-[0px] rounded-xl" /></td>
              <td><div className="w-[80px] h-[1px] bg-white relative right-[80px] bottom-[0px]"></div></td>
              <td><Image src='/img-05.png' height={90} width={100} alt='mission' className="relative right-[80px] bottom-[0px] rounded-xl" /></td>
              <td><div className="w-[80px] h-[1px] bg-white relative right-[80px] bottom-[0px]"></div></td>
              <td><Image src='/ai.png' height={180} width={200} alt='mission' className="relative right-[90px] bottom-[0px] rounded-xl" /></td>
              <td><div className="w-[80px] h-[1px] bg-white relative right-[100px] bottom-[0px]"></div></td>
              <td><div className="relative right-[20px] top-[180px]">
                <table className="border-separate border-spacing-0 border border-slate-500 ... relative top-[-180px] right-[80px]">

                  <tbody>
                    <tr>
                      <td className="border border-slate-700 ...">{t('p-q1')}
                      </td>
                      <td className="border border-slate-700 ...">1</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 ...">{t('p-q2')}
                      </td>
                      <td className="border border-slate-700 ...">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 ...">{t('p-q3')}
                      </td>
                      <td className="border border-slate-700 ...">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-700 ...">{t('p-q4')}

                      </td>
                      <td className="border border-slate-700 ...">0</td>
                    </tr>

                    <tr>
                      <td className="border border-slate-700 ...">{t('p-q5')}

                      </td>
                      <td className="border border-slate-700 ...">No</td>
                    </tr>


                  </tbody>
                </table>
              </div></td>

            </tr>
            <tr>
              <td><div className=" vertical-text relative top-[160px]">{t('p-glass')}</div></td>
              <td><Image src='/img-03.png' height={150} width={150} alt='mission' className="relative right-[80px] top-[90px] rounded-xl" /></td>
              <td><div className="w-[80px] h-[1px] bg-white relative right-[80px] top-[90px]"></div></td>
              <td><Image src='/img-06.png' height={90} width={100} alt='mission' className="relative right-[80px] top-[90px] rounded-xl" /></td>
              <td>
                {/* <div className="w-[80px] h-[1px] bg-white relative right-[80px] top-[90px]"></div> */}
              </td>
              <td><div className="w-[120px] text-center relative right-[50px] bottom-[20px]">{t('p-ai')}</div>
              </td>
              <td></td>
              <td></td>


            </tr>

          </tbody>
        </table>
        <div className="hidden xl:flex relative left-[120px] bottom-[50px]">{t('p-capture')}       </div>
        <div className="hidden xl:flex w-[200px] h-[1px] bg-white relative bottom-[500px] left-[340px] rotate-60  "></div>
        <div className="hidden xl:flex w-[200px] h-[1px] bg-white relative bottom-[240px] left-[340px] rotate-60down  "></div>
      </div>
    </section>
  )
}

export default Product