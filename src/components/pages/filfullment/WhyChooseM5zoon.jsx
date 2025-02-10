import Button from '@/components/atoms/Button';
import Title3 from '@/components/helpers/Title3';
import TitleArrow from '@/components/helpers/TitleArrow';
import ArrowRight from '@/components/svg/Arrow-right';
import Image from 'next/image';
import React from 'react';

export default function WhyChooseM5zoon({data}) {

    return (
        <div className=' py-[70px] bg-[#fff] relative min-h-[650px] items-center flex '>
            <div className='container grid grid-cols-2 max-md:grid-cols-1 gap-[50px] items-center justify-center '>
                <div className='row'>
                    <TitleArrow dataAos={'fade-up'} cn={'!justify-start max-md:!justify-center '} title={data?.title1} />
                    <Title3 dataAos={'fade-up'} delay={100} title={data?.title2} title2={data?.title3} title3={data?.title4} cn={' ltr:!text-left max-md:ltr:!text-center max-md:rtl:!text-center mb-[20px] rtl:!text-right t25 !font-[400] mt-[10px] '} />
                    <p data-aos={'fade-up'} data-aos-delay='200' className='t17 font-[400] text-[#A0A7C0] max-md:text-center '>
                        {data?.desc}
                    </p>

                    <div data-aos={'fade-up'} data-aos-delay='300' className='flex gap-[10px] w-full max-md:justify-center  mt-[40px] '>
                        <Button cn={' bg-secondery '} href={data?.href1} name={data?.btn1} icon={<ArrowRight />} />
                        {data?.btn2 && <Button cn={'bg-primary  '}   href={data?.href2} name={data?.btn2} icon={<ArrowRight />} />}
                    </div>
                </div>

                <Image data-aos='zoom-out' className=' max-md:order-[-1] max-md:mx-auto rtl:mr-auto ltr:ml-auto ' src={data?.img} alt='' width={500} height={500} />
            </div>
        </div>
    );
}
