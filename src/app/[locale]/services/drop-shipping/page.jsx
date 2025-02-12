import Button from '@/components/atoms/Button';
import Title from '@/components/helpers/Title';
import TitleArrow from '@/components/helpers/TitleArrow';
import Hero from '@/components/pages/filfullment/Hero';
import JoinUs from '@/components/pages/filfullment/JoinUs';
import ServicesForExporter from '@/components/pages/filfullment/ServicesForExporter';
import ServicesForSailer from '@/components/pages/filfullment/ServicesForSailer';
import WhatYouNeed from '@/components/pages/filfullment/WhatYouNeed';
import WhyChooseM5zoon from '@/components/pages/filfullment/WhyChooseM5zoon';
import FAQPage from '@/components/pages/home/FAQs';
import OurPartners from '@/components/pages/home/OurPartners';
import Mouce, { DropShipping_1, DropShipping_2, DropShipping_3, DropShipping_4, DropShipping_5, DropShipping_6, DropShipping_7, DropShipping_8 } from '@/components/svg/AllSVG';
import Footer2 from '@/components/templates/Footer2';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function page() {
    const t_ = useTranslations('filfullment');

    const ServicesForSailerData = [
        { title: t_('services2.product_sourcing.title'), desc: t_('services2.product_sourcing.description'), icon: <DropShipping_1 /> },
        { title: t_('services2.customer_service.title'), desc: t_('services2.customer_service.description'), icon: <DropShipping_2 /> },
        { title: t_('services2.storage_packaging.title'), desc: t_('services2.storage_packaging.description'), icon: <DropShipping_3 /> },
        { title: t_('services2.diverse_products.title'), desc: t_('services2.diverse_products.description'), icon: <DropShipping_4 /> },
        { title: t_('services2.payment_options.title'), desc: t_('services2.payment_options.description'), icon: <DropShipping_5 /> },
        { title: t_('services2.funding.title'), desc: t_('services2.funding.description'), icon: <DropShipping_6 /> },
        { title: t_('services2.comprehensive_reports.title'), desc: t_('services2.comprehensive_reports.description'), icon: <DropShipping_7 /> },
        { title: t_('services2.profit_collection.title'), desc: t_('services2.profit_collection.description'), icon: <DropShipping_8 /> },
    ];

    // "": "خدمات مخزون للموردين",
    // "": "استفد كمورد من خدمات مخزون لتسهيل توريد منتجاتك وضمان وصولها",
    // "": "للعملاء باحترافية.",



    const ServicesForSuppliers = [
        { title: t_('services.competitive_storage.title'), desc: t_('services.competitive_storage.description'), icon: '/fulfillment/serv1.png', bg: 'secondery', delay: '0' },
        { title: t_('services.customer_support.title'), desc: t_('services.customer_support.description'), icon: '/fulfillment/serv2.png', bg: 'white', delay: '0' },
        { title: t_('services.product_exposure.title'), desc: t_('services.product_exposure.description'), icon: '/fulfillment/serv3.png', bg: 'white', delay: '100' },
        { title: t_('services.product_sourcing.title'), desc: t_('services.product_sourcing.description'), icon: '/fulfillment/serv4.png', bg: 'secondery', delay: '100' },
        { title: t_('services.quality_inspection.title'), desc: t_('services.quality_inspection.description'), icon: '/fulfillment/serv5.png', bg: 'secondery', delay: '100' },
        { title: t_('services.profit_collection.title'), desc: t_('services.profit_collection.description'), icon: '/fulfillment/serv6.png', bg: 'white', delay: '100' },
        { title: t_('services.payment_options.title'), desc: t_('services.payment_options.description'), icon: '/fulfillment/serv7.png', bg: 'white', delay: '100' },
        { title: t_('services.detailed_reports.title'), desc: t_('services.detailed_reports.description'), icon: '/fulfillment/serv8.png', bg: 'secondery', delay: '100' },
    ];

    const JoinUsData = [
        { key: 'blue', title: t_('makhzon_for_suppliers'), desc: t_('suppliers_intro'), button: t_('join_as_supplier'), href: '/supplier', icon: '/fulfillment/supplier.png' },
        { key: 'yellow', title: t_('makhzon_for_marketers'), desc: t_('marketers_intro'), button: t_('join_as_marketer'), href: '/marketer', icon: '/fulfillment/marketer.png' },
    ];

	const whatYouNeedData = {
		title1 : t_("start_with_makhzon"),
		title2 : t_("start_intro"),
		title3 : t_("start_intro2"),
		data : [
		{ title : t_("steps.profit_receiving.title") , desc : t_("steps.profit_receiving.description")   , icon : "/fulfillment/step/4.png"},
		{  key : "border"  ,  icon : "/fulfillment/step/dashed.png" , },
		{ title : t_("steps.order_addition.title") , desc : t_("steps.order_addition.description")       , icon : "/fulfillment/step/3.png"},
		{  key : "border"  ,  icon : "/fulfillment/step/dashed.png" , },
		{ title : t_("steps.product_selection.title") , desc : t_("steps.product_selection.description") , icon : "/fulfillment/step/2.png"},
		{  key : "border"  ,  icon : "/fulfillment/step/dashed.png" , },
		{ title : t_("steps.account_creation.title") , desc : t_("steps.account_creation.description")   , icon : "/fulfillment/step/1.png"},
		]
	}

    const HeroData = {
        img : "/video/dropshipping.mp4",
        title : t_('platform_intro') ,
        title2 : t_('platform_intro2') ,
        desc : t_('platform_description') ,
        btn1 : t_('join') ,
        btn2 : t_('contact') ,
        href1 : "/",
        href2 : "/",
    }


    const t = useTranslations("")
    const WhyChooseM5zzonData = {
        title1 :   t('who_we_are') ,
        title2 :   t('slogan') ,
        title3 :   t('slogan1') ,
        title4 :   t('slogan2') ,
        desc :   t('about_makhzon') ,
        btn1 : t('call_to_action.register_as_supplier') ,
        btn2 :   t('call_to_action.register_as_marketer') ,
        img :   '/fulfillment/over5years.png' ,
        href1 : "/",
        href2 : "/",
    }


    return (
        <div>
            <Hero t={t_} data={HeroData} />
            <WhyChooseM5zoon data={WhyChooseM5zzonData} />
            <ServicesForExporter t={t_} data={ServicesForSailerData} />
            <JoinUs t={t_} data={JoinUsData} />
            <ServicesForSailer t={t_} data={ServicesForSuppliers} title1 = {t_("supplier_services")} title2 = {t_("supplier_services_intro")} title3 = {t_("supplier_services_intro2")}  />
            <WhatYouNeed data={whatYouNeedData} t={t_} />
			<OurPartners 
				title = {<TitleArrow dataAos={'zoom-out'} cn={''}    title={t_("partners_intro")} />}
				desc = {<Title      dataAos={'zoom-out'} delay={100} icon={<Mouce />} title={t_("partners_description")} title2={t_("partners_description2")} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '} />}
			/>


			<div className="map relative bg-white  py-[80px] ">
				<div className="container">
					<TitleArrow dataAos={'fade-up'} cn={''} title={t_("branches_locations")} />
					<Title      dataAos={'fade-up'} delay={100} icon={<Mouce />} title={t_("branches_description")} title2={t_("branches_description2")} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '} />

					<Image data-aos="zoom-out" src="/fulfillment/map.png" alt="" width="1350" height="660" />
				</div>
			</div>


			<FAQPage 
				title = {<TitleArrow dataAos={'zoom-out'} cn={''}    title={t_("important_questions")} />}
				desc = {<Title      dataAos={'zoom-out'} delay={100} icon={<Mouce />} title={t_("questions_intro")} title2={t_("questions_intro2")} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '} />}
			 />

			 <Footer2 />
        </div>
    );
}
