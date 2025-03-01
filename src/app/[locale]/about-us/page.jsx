'use client';
import Feature from '@/components/pages/home/Feature';
import { useTranslations } from 'next-intl';
import FAQPage from '@/components/pages/home/FAQs';
import OurLocation from '@/components/pages/home/OurLocation';
import Image from 'next/image';
import Title from '@/components/helpers/Title';
import Button from '@/components/atoms/Button';
import { useState } from 'react';

const Page = () => {
    const t = useTranslations('about-us');

    const whyChooseUs = [
        { title: t('attention_to_detail'), desc: t('financial_security_description') },
        { title: t('trust_and_security'), desc: t('technical_support_description') },
        { title: t('technical_support'), desc: t('comprehensive_services') },
    ];

    const [showImg, setshowImg] = useState();

    return (
        <div className=''>
            <div className=' relative w-full h-[300px]'>
                <Image data-aos='fade-down' className=' w-full h-full object-cover ' src={'/imgs/frame-left.png'} alt='' width={1500} height={300} />
                <h1 data-aos='zoom-in' className='absolute left-[50%] top-[50%] !translate-x-[-50%]   text-[35px] font-[600] text-white '>
                    {t('title')}
                </h1>
            </div>

            <div className=' min-h-[60vh] items-center justify-center container grid grid-cols-2 max-md:grid-cols-1 max-lg:grid-cols-2 max-md:justify-center max-xl:grid-cols-[1fr,500px] max-xl:gap-[30px] gap-[100px] my-[40px] py-[30px] '>
                <div className='flex flex-col gap-[10px] '>
                    <Title dataAos='fade-up' delay='100' cnChild={"w-full"} cn={' w-full ltr:md:!text-left rtl:md:!text-right text-[20px] '} title={t('about_platform')} title2={t('m5zoon')} />
                    <Title dataAos='fade-up' delay='200' cnChild={"w-full"} cn={' w-full ltr:md:!text-left rtl:md:!text-right text-[27px]'} title={t('success_message')} title2={t('eccomerce')} />
                    <div data-aos='fade-up' data-aos-delay='300' className='p max-md:text-center text-[#A0A7C0] !mt-[15px] my-[30px] text-[17px] font-[400] '>{t('platform_description')} </div>
                    <Button cn={'max-md:!mx-auto'} dataAos='fade-up' delay='400' name={t('subscribe_now')} />
                </div>

                <video  data-aos='fade-up'  className='max-md:order-[-1] max-md:mx-auto rounded-[8px] max-w-[500px] max-h-[400px] rtl:mr-auto ltr:ml-auto w-full object-cover'  
                        width={500}  
                        height={350}  
                        controls  
                        autoPlay  
                        muted  
                        loop > <source src={"/video/customer services.mp4"} type="video/mp4" />  </video>
                {/* <Image data-aos='fade-up' className='max-md:order-[-1] max-md:mx-auto rounded-[8px] max-w-[500px] max-h-[400px] rtl:mr-auto ltr:ml-auto w-full  object-cover ' src={'/imgs/about-us-vedio.png'} alt='' width={500} height={350} /> */}
            </div>

            <div className='container my-[40px] py-[30px] ' id='why-choose-us' >
                <Title cn={'text-center mb-[40px] '} title={t('why_choose_us')} title2={t('m5zoon2')} />

                <div className=' grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  gap-[40px] max-xl:gap-[20px] '>
                    {whyChooseUs.map((item, index) => (
                        <div onMouseEnter={() => setshowImg(index)} onMouseLeave={() => setshowImg(null)} className={` cursor-pointer hover:bg-secondery duration-300 group flex p-[30px] max-xl:py-[15px] flex-col gap-[10px] rounded-[15px] `} key={index} data-aos='fade-up' data-aos-delay={`${index}00`} style={{ boxShadow: '0px 10px 60px 0px #262D7614' }}>
                            <Image src={`/icons/m5zoon-${showImg == index ? 'white' : 'blue'}.svg`} alt='' width={60} height={60} />
                            {/* <div className='mb-[20px]'> {item.icon}</div> */}
                            <h3 className='text-[24px] font-[500] group-hover:text-white '>{item.title}</h3>
                            <p className='text-[20px] font-[400] group-hover:text-white '>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Feature cn={'my-[40px] py-[30px]'} title={<Title cn={'text-center '} title={t('numbers_and_statistics')} title2={t('statics')} />} />
            <FAQPage />
            <OurLocation />
        </div>
    );
};

export default Page;
