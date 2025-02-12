import Title from '@/components/helpers/Title';
import TitleArrow from '@/components/helpers/TitleArrow';
import Mouce from '@/components/svg/AllSVG';
import Image from 'next/image';
import React from 'react';

export default function ServicesForExporter({data , t}) {


    return (
		
        <div className='py-[80px] bg-white  relative  ' >
			<div className='container w-full h-full'>

                <TitleArrow dataAos={'fade-up'} cn={''} title={t('marketer_services')} />
                <Title dataAos={'fade-up'} delay={100} icon={<Mouce />} title={t('services_intro')} title2={t('services_intro2')} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '}  />

                <div className='flex items-center flex-wrap justify-center gap-[20px] ' >

                    {
                        data?.map((e,i)=> (
                            <div key={i} data-aos="zoom-out" data-aos-delay={"100"}  className=' max-md:justify-start group duration-300 hover:bg-secondery rounded-[10px] max-md:max-w-[230px] max-md:min-h-[230px] max-sm:max-w-fit max-sm:min-h-fit h-full max-w-[300px] min-h-[300px] flex flex-col items-center justify-center p-[20px] w-full ' style={{boxShadow : "0px 10px 60px 0px #262D7614"}} > 
                            {e.icon}
                            <h3 className=' select-none group-hover:text-white duration-300 text-center t20 font-[400] text-secondery mt-[10px]  ' > {e.title} </h3>
                            <p className=' select-none  duration-300 text-center t17 font-[300] text-[#ADB7C3]  ' > {e.desc} </p>
                            </div>
                        ))
                    }
                </div>
        </div>
		</div>
    );
}
