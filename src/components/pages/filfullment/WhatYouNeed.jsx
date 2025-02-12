import Title from '@/components/helpers/Title';
import TitleArrow from '@/components/helpers/TitleArrow';
import Mouce from '@/components/svg/AllSVG';
import Image from 'next/image';
import React from 'react';

export default function WhatYouNeed({ data, t }) {

    return (
        <div className='py-[80px] bg-white  relative  '>
            <div className='container px-[10px] w-full h-full'>
                <TitleArrow dataAos={'fade-up'} cn={''} title={data?.title1} />
                <Title dataAos={'fade-up'} delay={100} icon={<Mouce />} title={data?.title2} title2={data?.title3} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '} />

                <div className='flex items-start max-md:flex-wrap max-md:justify-center max-md:gap-x-[20px] max-md:gap-y-[30px]  justify-between  '>
                    {/* data-aos="fade-up" data-aos-delay={i+1 + "00"}  */}
                    {data?.data?.map((e, i) => (
                        <div key={i}>
                            {e.key == 'border' ? (
                                <Image data-aos="zoom-in" data-aos-delay="100" className=' max-lg:hidden h-[100px] max-xl:max-w-[150px] duration-300 max-w-[200px] w-full object-contain' src={e.icon} alt='' width={100} height={100} />
                            ) : (
                                <div key={i} data-aos="fade-up" data-aos-delay="100" className='  items-start justify-center  h-full max-w-[220px]  w-full flex flex-col ' >
                                    <Image className='mx-auto' src={e.icon} alt='' width={100} height={100} />
                                    <h3 className=' w-full mt-[10px] select-none !text-center t20 max-lg:t18 font-[400] text-secondery '> {e.title} </h3>
                                    <p className=' select-none text-center t17 max-md:text-balance max-lg:t18 max-lg:t15 font-[300] text-[#ADB7C3]  '> {e.desc} </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
