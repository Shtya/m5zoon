'use client';
import Title from '@/components/helpers/Title';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function FAQPage({ title, desc }) {
    const t = useTranslations();

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='relative bg-white py-[80px] overflow-x-hidden ' >
            <div className='container  '>
            {title ? title : <Title cn={'text-center'} title={t('titlefaqs')} title2={t('important')} />}
            {desc}
            

            <div className='w-full mt-[50px] grid md:grid-cols-[1fr,320px] items-start gap-[20px] '>
                <ul className=' flex flex-col gap-[20px]'>
                    {t.raw('faqs').map((faq, index) => (
                        <li key={index} data-aos="zoom-out" className='flex flex-col  px-[10px]  '>
                            <div onClick={() => toggleAccordion(index)} className={`bg-[#fff] duration-300 transition-all  rounded-[5px] border ${activeIndex === index ? ' !bg-[#fbfcff] ' : ''} border-[#eeeeee] flex flex-row gap-[10px] justify-between items-center max-md:items-start font-semibold p-3 cursor-pointer`}>
                                <span className=' text-[#1e1f4b] max-sm:t16 t20 font-normal'>{faq.question}</span>
                                <svg className={` ${activeIndex === index ? ' !fill-primary' : '!fill-[#E4E4E4]'}  flex-none fill-none  h-6 w-6 transform transition-transform duration-500 ${activeIndex === index ? 'rotate-[0deg]' : 'ltr:rotate-[90deg] rtl:rotate-[-90deg]'}`} width='30' height='31' viewBox='0 0 30 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <g id='Group 35538'>
                                        <circle id='Ellipse 430' cx='15' cy='15.5' r='15' transform='rotate(180 15 15.5)' fill='' /> <path id='Vector 205' d='M20.4082 18.1782L14.7041 12.4999L8.99996 18.1782' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                                    </g>
                                </svg>
                            </div>
                            <div className={`t18 max-sm:t14 font-normal px-[10px] overflow-hidden transition-[max-height, padding] duration-500 text-[#a0a7c0] ease-in-out ${activeIndex === index ? 'max-h-[300px] py-4' : 'max-h-0 py-0'}`}>{faq.answer} </div>
                        </li>
                    ))}
                </ul>
                <Image data-aos="zoom-in" className=' h-full max-md:hidden max-w-full w-full object-cover rounded-[8px] ' src={'/imgs/question.png'} alt='' width={400} height={600} />
            </div>
        </div>
        </div>
    );
}
