import Title from '@/components/helpers/Title';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function OurPartners() {
    const t = useTranslations();

	const imgs = [
		"/imgs/partners/1.png" ,
		"/imgs/partners/2.png" ,
		"/imgs/partners/3.png" ,
		"/imgs/partners/4.png" ,
		"/imgs/partners/5.png" ,
		"/imgs/partners/6.png" ,
		"/imgs/partners/7.png" ,
	]

    return (
		<div className='bg-[#fbfcff] ' >

        <div className=' container py-[30px] my-[40px] ' >
            <Title cn={'text-center'} title={t('partners_message')} title2={t('sucees')} />
        
			<div className='mt-[50px] flex flex-wrap items-center justify-center gap-[10px] ' >
				{
					imgs?.map((e,i)=> (
						<Image data-aos="zoom-in"  data-aos-delay={`${i+1}00`} className='w-[100%] object-contain max-w-[180px] h-[180px] max-md:max-w-[120px] max-md:h-[80px]  bg-white rounded-[20px] shadow-[0px_10px_20px_0px_rgba(185,185,185,0.25)] cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300' src={e} width={140} height={140} alt='' key={i} />
					))
				}
			</div>
		</div>
		</div>
    );
}


