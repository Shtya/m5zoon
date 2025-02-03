import { useLocale, useTranslations } from 'next-intl';
import React from 'react';
import Title from '@/components/helpers/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function Testimonials({cn}) {
    const t = useTranslations();
    const locale = useLocale()

    const config = {
        modules: [Autoplay, Pagination, Navigation],
        spaceBetween: 15,
        slidesPerView: 3,
        autoplay: {
            delay: 0, // No pause
            disableOnInteraction: false,
            // pauseOnMouseEnter: false,
        },
        speed: 4000, // Smooth transition speed (adjust as needed)
        loop: true,
        // loopAdditionalSlides: 10, // Prevents flickering
        pagination: { clickable: true },
        navigation: true,
        breakpoints: {
            1024: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
        },
    };

    const testimonials = [
        { name: t.raw('customers')[0].name, title: t.raw('customers')[0].title, review: t.raw('customers')[0].review, rating: 3, img: '/imgs/persons/1.png' },
        { name: t.raw('customers')[1].name, title: t.raw('customers')[1].title, review: t.raw('customers')[1].review, rating: 4, img: '/imgs/persons/2.png' },
        { name: t.raw('customers')[2].name, title: t.raw('customers')[2].title, review: t.raw('customers')[2].review, rating: 2, img: '/imgs/persons/3.png' },
        { name: t.raw('customers')[3].name, title: t.raw('customers')[3].title, review: t.raw('customers')[3].review, rating: 3, img: '/imgs/persons/4.png' },
        { name: t.raw('customers')[3].name, title: t.raw('customers')[3].title, review: t.raw('customers')[3].review, rating: 3, img: '/imgs/persons/4.png' },
        { name: t.raw('customers')[4].name, title: t.raw('customers')[4].title, review: t.raw('customers')[4].review, rating: 4, img: '/imgs/persons/3.png' },
        { name: t.raw('customers')[5].name, title: t.raw('customers')[5].title, review: t.raw('customers')[5].review, rating: 5, img: '/imgs/persons/2.png' },
        { name: t.raw('customers')[6].name, title: t.raw('customers')[6].title, review: t.raw('customers')[6].review, rating: 5, img: '/imgs/persons/1.png' },
    ];

    return (
        <div className={`container py-[30px] my-[40px] review ${cn} `}>
            <Title cn={'text-center'} title={t('customer_reviews')} title2={t('M5zoon')} />

            <Swiper {...config} dir={'rtl'}>
                {testimonials.slice(0, 4).map((t, i) => (
                    <SwiperSlide className='pt-[20px] pb-[10px] ' key={i} dir={locale == "en" ? "ltr" : 'rtl'} >
                        <div className='bg-white shadow-md rounded-md p-6 h-full flex flex-col'>
                            <div className='flex  mb-[10px] items-center justify-between gap-[10px]'>
                                <div className='flex  items-center gap-[10px] '>
                                    <Image className=' w-[40px] h-[40px] rounded-[50%] overflow-hidden ' src={t.img} alt={t.name} width={40} height={40} />
                                    <div>
                                        <p className='mb-1 text-[#1e1f4b] t13 font-medium  '>{t.name}</p>
                                        <p className=' text-[#a0a7c0] t11 font-normal   '>{t.title}</p>
                                    </div>
                                </div>
                                <p className='text-[#ffb949]  '>{'⭐'.repeat(t.rating)}</p>
                            </div>

                            <p className='text-[#a0a7c0] font-light t15 line-clamp-2  '> {t.review} </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper {...config} dir='ltr'>
                {testimonials.slice(4, 8).map((t, i) => (
                    <SwiperSlide className='pt-[20px] pb-[10px] ' key={i} dir={locale == "en" ? "ltr" : 'rtl'} >
                        <div className='bg-white shadow-md rounded-md p-6 h-full flex flex-col'>
                            <div className=' mb-[10px] flex items-center justify-between gap-[10px]'>
                                <div className='flex items-center gap-[10px] '>
                                    <Image className=' w-[40px] h-[40px] rounded-[50%] overflow-hidden ' src={t.img} alt={t.name} width={40} height={40} />
                                    <div>
                                        <p className='mb-1 text-[#1e1f4b] t13 font-medium  '>{t.name}</p>
                                        <p className=' text-[#a0a7c0] t11 font-normal   '>{t.title}</p>
                                    </div>
                                </div>
                                <p className='text-[#ffb949] '>{'⭐'.repeat(t.rating)}</p>
                            </div>

                            <p className='text-[#a0a7c0] font-light t15 line-clamp-2  '> {t.review} </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
