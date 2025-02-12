import Title from '@/components/helpers/Title';
import TitleArrow from '@/components/helpers/TitleArrow';
import Branches from '@/components/pages/filfullment/Branches';
import Hero from '@/components/pages/filfullment/Hero';
import InfoSec from '@/components/pages/filfullment/InfoSec';
import WhyChooseM5zoon from '@/components/pages/filfullment/WhyChooseM5zoon';
import FAQPage from '@/components/pages/home/FAQs';
import OurPartners from '@/components/pages/home/OurPartners';
import Mouce  from '@/components/svg/AllSVG';
import Footer2 from '@/components/templates/Footer2';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function page() {
    const t = useTranslations('call-center');
    const t_ = useTranslations('filfullment');


    const HeroData = {
        img: '/video/customer services.mp4',
        title: t('call_center_service.title'),
        title2: t('call_center_service.title2'),
        title3: t('call_center_service.title3'),
        desc: t('call_center_service.description'),
        btn1: t('cta.register_now'),
        btn2: t('cta.join_us'),
        href1: '/',
        href2: '/',
    };


    const WhyChooseM5zzonData = {
        title1: t('about_us.title'),
        title2: t('about_us.title1'),
        title3: t('about_us.title2'),
        title4: t('about_us.title3'),
        desc: t('about_us.description'),
        btn1: t('about_us.join_now'),
        img: '/call-center/sec1.png',
        href1: '/',
    };



    const InfoSecData = {
        title1: t('services.title'),
        title2: t('services.subtitle'),
        title3: t('services.subtitle2'),

        lists: [
            { title: t('customer_support.title'), title2: t('customer_support.title2'), desc: t('customer_support.description'), img: '/call-center/1.png' }, 
            { title: t('order_management.title'), title2: t('order_management.title2'), desc: t('order_management.description'), img: '/call-center/2.png' }, 
            { title: t('branded_call_center.title'), title2: t('branded_call_center.title2'), desc: t('branded_call_center.description'), img: '/call-center/3.png' }, 
            { title: t('telesales.title'), title2: t('telesales.title2'), desc: t('telesales.description'), img: '/call-center/4.png' }, 
            { title: t('reports_analysis.title'), title2: t('reports_analysis.title2'), desc: t('reports_analysis.description'), img: '/call-center/5.png' }, 
            { title: t('flexible_solutions.title'), title2: t('flexible_solutions.title2'), desc: t('flexible_solutions.description'), img: '/call-center/6.png' }, 
        ]
    };

    return (
        <div>
            <Hero data={HeroData} />
            <WhyChooseM5zoon data={WhyChooseM5zzonData} />
            <Branches />

            <div className='py-[80px]'>
                <div className='container'>
                    <TitleArrow dataAos={'fade-up'} title={InfoSecData.title1} />
                    <Title
                        dataAos={'fade-up'}
                        title={InfoSecData.title2}
                        title2={InfoSecData.title3}
                        cn={'t25 !font-[400] mt-[10px] '}
                        icon={
                            <svg className=' !stroke-primary ' xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
                                <path d='M6.50016 1.83331L7.16683 4.24998M4.75016 6.66665L2.3335 5.99998M12.1668 3.41665L10.5002 4.99998M5.50016 9.99998L3.91683 11.6666M8.00016 7.49998L12.1668 17.5L13.6668 13.1666L18.0002 11.6666L8.00016 7.49998Z' stroke='text-primary' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        }
                    />

                    <div className='flex flex-col gap-[70px] mt-[50px] max-w-[1250px] w-full  '>
                        <InfoSec order='order-[-1]' data={InfoSecData.lists[0]} />
                        <InfoSec order='' data={InfoSecData.lists[1]} />
                        <InfoSec order='order-[-1]' data={InfoSecData.lists[2]} />
                        <InfoSec order='' data={InfoSecData.lists[3]} />
                        <InfoSec order='order-[-1]' data={InfoSecData.lists[4]} />
                        <InfoSec order='' data={InfoSecData.lists[5]} />
                    </div>
                </div>
            </div>

            <OurPartners title={<TitleArrow dataAos={'zoom-out'} cn={''} title={t_('partners_intro')} />} desc={<Title dataAos={'zoom-out'} delay={100} icon={<Mouce />} title={t_('partners_description')} title2={t_('partners_description2')} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '} />} />

            <FAQPage title={<TitleArrow dataAos={'zoom-out'} cn={''} title={t_('important_questions')} />} desc={<Title dataAos={'zoom-out'} delay={100} icon={<Mouce />} title={t_('questions_intro')} title2={t_('questions_intro2')} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '} />} />

            <Footer2 />
        </div>
    );
}
