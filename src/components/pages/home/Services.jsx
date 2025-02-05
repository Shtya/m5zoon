"use client"
import Title from '@/components/helpers/Title';
import SVG1 from '@/components/svg/services/1';
import SVG2 from '@/components/svg/services/2';
import SVG3 from '@/components/svg/services/3';
import SVG4 from '@/components/svg/services/4';
import SVG5 from '@/components/svg/services/5';
import SVG6 from '@/components/svg/services/6';
import SVG7 from '@/components/svg/services/7';
import SVG8 from '@/components/svg/services/8';
import { useTranslations } from 'next-intl';

export default function Services() {
    const t = useTranslations();




    const servciesData = [
        { label:  t('storage_packaging')               , icon: <SVG1 /> },
        { label:  t('payment_collection')              , icon: <SVG2 /> },
        { label:  t('direct_customer_communication')   , icon: <SVG3 cn="group-hover:fill-white" /> },
        { label:  t('product_and_advertising_finance') , icon: <SVG4 /> },
        { label:  t('order_followup')                  , icon: <SVG5 /> },
        { label:  t('customs_clearance')               , icon: <SVG6 /> },
        { label:  t('ads_and_product_finance')         , icon: <SVG7 /> },
        { label:  t('visa_for_ads')                    , icon: <SVG8 /> },
    ];
    return (
        <div className='bg-[#fbfcff] ' id='our-services' >
            <div className='container py-[30px] my-[40px] '>
            <Title cn='text-center' title={  t('our_premium_services')} title2={  t('less_effort')} />

{/* after:absolute after:top-0 after:left-0 after:h-0 hover:after:h-[51%] after:duration-300 after:w-full after:bg-secondery after:z-[0]
					before:absolute before:bottom-0 before:left-0 before:h-0 hover:before:h-[51%] before:duration-300 before:w-full before:bg-secondery before:z-[0] */}
            <div className='grid grid-cols-2 max-md:gap-[20px] max-sm:gap-[10px] gap-[30px] max-w-[1000px] w-full mx-auto mt-[60px]  '>
                {servciesData?.map((e, i) => (
                    <div
                        key={i}
                        className={` hover:bg-secondery  duration-300 group relative group min-h-[118px] max-md:min-h-[80px] cursor-pointer hover:text-white text-secondery2 max-sm:px-[10px] px-[30px] bg-white rounded-[10px] overflow-hidden shadow-[0px_10px_20px_0px_rgba(215,215,215,0.25)] max-md:gap-[10px] gap-[18px] items-center max-md:justify-start inline-flex `}>
                        <span className=' group-hover:scale-[1.4] ltr:group-hover:mr-[10px] rtl:group-hover:ml-[20px] z-[10]  duration-300 '> {e.icon} </span>
                        <h4 className=' z-[10] duration-300 max-md:t14  t20 group-hover:text-white  text-[#09396f] capitalize font-normal '> {e.label} </h4>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}
