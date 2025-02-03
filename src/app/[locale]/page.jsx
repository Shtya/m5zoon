'use client';
import Feature from '@/components/pages/home/Feature';
import Hero from '@/components/pages/home/hero';
import Landing from '@/components/pages/home/Landing';
import Testimonials from '@/components/pages/home/Testimonials';
import Services from '@/components/pages/home/Services';
import ShowSection from '@/components/pages/home/ShowSection';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import OurPartners from '@/components/pages/home/OurPartners';
import FAQPage from '@/components/pages/home/FAQs';
import OurLocation from '@/components/pages/home/OurLocation';

const page = () => {
    const t = useTranslations()

    const dataSection1 = {
        img  : "/imgs/static-img.png",
        shadowImg : "/icons/shadow-blue.svg",
        title  : t("store_needs") ,
        title2  : t("fulfillment_services") ,
        title3 : t("shipping_cod") ,
        lists : [
            { title : t("smart_inventory_management") , desc : t("inventory_tracking") , icon : "icons/1.svg"  },
            { title : t("selected_products") , desc : t("product_selection") , icon : "icons/2.svg"  },
            { title : t("profit_collection_transfer") , desc : t("profit_transfer") , icon : "icons/3.svg" },
        ]
    }
    const dataSection2 = {
        img  : "/imgs/get-money-img.png",
        shadowImg : "/imgs/shadow-yellow.png",
        title  : t("trusted_suppliers_marketers") ,
        title2  : t("join_us_today") ,
        title3 : t("always_ready") ,
        lists : [
            { title : t("from_warehouse_to_door") , desc : t("fast_delivery") , icon : "icons/4.svg"  },
            { title : t("quality_products_services") , desc : t("quality_priority") , icon : "icons/5.svg"  },
            { title : t("customer_support") , desc : t("dedicated_support_team") , icon : "icons/6.svg" },
        ]
    }

    
    return (
        <div className='flex flex-col' >
            <Landing   />
            <Feature  />
            <div className='md:hidden' > <Testimonials   /> </div>
            <ShowSection data={dataSection1}    />
            <ShowSection data={dataSection2} dir={"rtl"}   />
            <Services  />
            <div className='hidden md:flex' > <Testimonials   /> </div>
            <OurPartners  />
            <FAQPage  />
            <OurLocation  />
             
        </div>
    );
};

export default page;
