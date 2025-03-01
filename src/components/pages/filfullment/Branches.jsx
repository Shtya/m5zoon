import Title from '@/components/helpers/Title';
import TitleArrow from '@/components/helpers/TitleArrow';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function Branches() {
    const t = useTranslations('filfullment');

	const data = [
        {icon : "/fulfillment/flag1.png" , title : t("countries.uae") } ,
        {icon : "/fulfillment/flag2.png" , title : t("countries.saudi_arabia") } ,
        {icon : "/fulfillment/flag3.png" , title : t("countries.oman") } ,
        {icon : "/fulfillment/flag5.png" , title : t("countries.jordan") } ,
        {icon : "/fulfillment/flag4.png" , title : t("countries.seesoon") } ,
	]

    return (
        <div className=' py-[70px] bg-[#FBFCFF] relative' id='our-branches' >
            <div className='container'>
                <TitleArrow dataAos={"fade-up"} title={t('branch_locations')} />
				<Title dataAos={"fade-up"}  title={t("sales_description")} title2={t("different_countries")} cn={"t25 !font-[400] mt-[10px] "} icon={<svg className=' !stroke-primary ' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path d="M6.50016 1.83331L7.16683 4.24998M4.75016 6.66665L2.3335 5.99998M12.1668 3.41665L10.5002 4.99998M5.50016 9.99998L3.91683 11.6666M8.00016 7.49998L12.1668 17.5L13.6668 13.1666L18.0002 11.6666L8.00016 7.49998Z" stroke="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>} />
            
				<div className=" w-full mt-[60px] grid max-md:grid-cols-2 md:flex items-center justify-center gap-y-[30px] gap-x-[20px] flex-wrap ">
					{
						data.map((item, index) => (
                            <div  data-aos="zoom-out" data-aos-delay={200} key={index} className='   md:max-w-[350px] md:min-w-[250px] max-lg:max-w-[200px] w-full bg-white rounded-[500px] flex items-center max-md:justify-start justify-center gap-[10px] border border-[#EEEEEE] px-[20px] max-sm:px-[5px] min-h-[85px] p-[10px]  '>
                                <Image className='' width={45} height={45} src={item.icon} alt={item.title} />
								<h3 className='  t18 max-sm:t15 font-[400] text-[#767575] ' >{item.title}</h3>
                            </div>
                            
                        ))
					}
				</div>
			</div>
        </div>
    );
}
