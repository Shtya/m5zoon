import Title from '@/components/helpers/Title';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function OurPartners({ title, desc }) {
    const t = useTranslations();

    const imgs = ['/imgs/partners/1.png', '/imgs/partners/2.png', '/imgs/partners/3.png', '/imgs/partners/4.png', '/imgs/partners/5.png', '/imgs/partners/6.png' ];

    return (
        <div className='bg-[#fbfcff] relative py-[80px]' id='success-partners'>
            <div className=' container  '>
                {title ? title : <Title cn={'text-center'} title={t('partners_message')} title2={t('sucees')} />}
                {desc}

                <div className='mt-[50px] flex flex-wrap items-center justify-center gap-[10px] '>
                    {imgs?.map((e, i) => (
                        <div data-aos="zoom-in" data-aos-delay={`${i}00`} className=' flex items-center justify-center w-[180px] h-[160px] max-md:w-[120px] max-md:h-[80px] bg-white rounded-[20px] shadow-[0px_10px_20px_0px_rgba(185,185,185,0.25)] cursor-pointer'    key={i} > 
                            <Image className='w-[80%] h-[60px] object-contain   filter grayscale hover:grayscale-0 transition-all duration-300' src={e} width={140} height={140} alt=''  />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
