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
    const t_ = useTranslations('filfullment');

    const HeroData = {
        img: '/video/fulfliment.mp4',
        title: t_('title'),
        title2: t_('store'),
        desc: t_('description'),
        btn1: t_('join'),
        btn2: t_('contact'),
        href1: '/',
        href2: '/',
    };

    const t = useTranslations('');
    const WhyChooseM5zzonData = {
        title1: t('what_we_offer'),
        title2: t('fulfillment_partner'),
        title3: t('fulfillment_partner2'),
        title4: t('fulfillment_partner3'),
        desc: t('services_description'),
        btn1: t('join_now'),
        img: '/fulfillment/sec2Fulfillment.png',
        href1: '/',
    };

    const InfoSecData = {
        title1: t('get_to_know_makzoun_services'),
        title2: t('services_intro'),
        title3: t('services_intro2'),

        lists: [
            { title: t('storage_and_packaging.title'), title2: t('storage_and_packaging.title2'), desc: t('storage_and_packaging.desc'), img: '/fulfillment/sec1.png' },
            { title: t('customer_service.title'), title2: t('customer_service.title2'), desc: t('customer_service.desc'), img: '/fulfillment/sec2.png' },
            { title: t('fast_shipping.title'), title2: t('fast_shipping.title2'), desc: t('fast_shipping.desc'), img: '/fulfillment/sec3.png' },
            { title: t('profit_collection.title'), title2: t('profit_collection.title2'), desc: t('profit_collection.desc'), img: '/fulfillment/sec4.png' },
            { title: t('product_import_and_quality_check.title'), title2: t('product_import_and_quality_check.title2'), desc: t('product_import_and_quality_check.desc'), img: '/fulfillment/sec5.png' },
            { title: t('additional_inventory_services.title'), title2: t('additional_inventory_services.title2'), desc: t('additional_inventory_services.desc'), img: '/fulfillment/sec6.png' },
            { title: t('detailed_reports.title'), title2: t('detailed_reports.title2'), desc: t('detailed_reports.desc'), img: '/fulfillment/sec7.png' },
        ],
    };

    return (
        <div className='overflow-auto' >
            <Hero t={t_} data={HeroData} />
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
                        <InfoSec order='order-[-1]' data={InfoSecData.lists[6]} />
                    </div>
                </div>
            </div>

            <OurPartners title={<TitleArrow dataAos={'zoom-out'} cn={''} title={t_('partners_intro')} />} desc={<Title dataAos={'zoom-out'} delay={100} icon={<Mouce />} title={t_('partners_description')} title2={t_('partners_description2')} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '} />} />

            <FAQPage dataFaqs={"faqs_fullfillment"} title={<TitleArrow dataAos={'zoom-out'} cn={''} title={t_('important_questions')} />} desc={<Title dataAos={'zoom-out'} delay={100} icon={<Mouce />} title={t_('questions_intro')} title2={t_('questions_intro2')} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '} />} />

            <Footer2 />
        </div>
    );
}
