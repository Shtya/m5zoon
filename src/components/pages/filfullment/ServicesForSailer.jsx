import Title from '@/components/helpers/Title';
import TitleArrow from '@/components/helpers/TitleArrow';
import Mouce from '@/components/svg/AllSVG';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function ServicesForSailer({t , data , title1 , title2 , title3}) {

    return (
		
        <div className='py-[80px] bg-white  relative  ' >
			<div className='container  mx-auto w-full h-full'>

            <TitleArrow dataAos={'fade-up'} cn={''} title={title1} />
            <Title dataAos={'fade-up'} delay={100} icon={<Mouce />} title={title2} title2={title3} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '}  />

            <div className='relative  pb-0 wrap overflow-hidden p-10 max-md:p-5 h-full'>
                <div data-aos="fade-up"  className='border-2-2 border-dashed absolute border-opacity-20 border-secondery h-full border' style={{ left: '50%' }}></div>

                {data.map((item, i) => (
                    <div key={i} className={`mb-4 max-md:flex-col max-md:gap-[15px] flex justify-between items-center w-full ${i % 2 === 0 ? 'right-timeline' : 'flex-row-reverse left-timeline'}`}>
                        <div className='order-1 max-md:hidden w-[47%]'></div>
                        <div data-aos="zoom-in" data-aos-delay={item.delay}   className={`  ${i%2 == 0 ? "bg-secondery" : "border-[2px] border-[#d5d5d6] ml-[2px] bg-white "} ${item.bg == "white" ? "max-md:!bg-white" : "max-md:!bg-secondery " } max-md:border-[2px] max-md:border-[#d5d5d6] z-20 flex items-center order-1 shadow-xl w-[25px] h-[25px] rounded-full`}> </div>
                        <div data-aos="fade-up" data-aos-delay={item.delay}  className={` flex max-md:flex-col max-md:items-center items-center gap-[10px]  order-1 rounded-[10px] min-h-[120px] w-[47%] max-md:w-full px-[20px] py-[10px] ${item.bg == "secondery" ? "bg-secondery text-white " : " bg-white text-secondery "} ` } style={{boxShadow : "0px 10px 60px 0px #262D7614"}} >
                            <Image data-aos="zoom-out" data-aos-delay={item.delay + 300} alt='' src={item.icon} width={60} height={60} />
                            <div>
                                <h3 className={`mb-1 font-[400] t20  max-md:text-center `}>{item.title}</h3>
                                <p className={`t17 font-[300] tracking-wide  max-md:text-center max-md:mb-[10px] `}>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
		</div>
    );
}
