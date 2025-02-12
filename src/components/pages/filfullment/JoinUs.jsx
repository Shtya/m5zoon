import Button from '@/components/atoms/Button';
import Title from '@/components/helpers/Title';
import TitleArrow from '@/components/helpers/TitleArrow';
import Mouce from '@/components/svg/AllSVG';
import ArrowRight from '@/components/svg/Arrow-right';
import Image from 'next/image';
import React from 'react';

export default function JoinUs({data , t}) {



    // { title: t_("makhzon_for_suppliers"), desc: t_("suppliers_intro"), button: t_("join_as_supplier"), href: '/supplier', icon: '' },

    return (
		
        <div className='py-[80px] bg-white  relative  ' >
			<div className='container w-full h-full'>

                <TitleArrow dataAos={'fade-up'} cn={''} title={t('join_makhzon_team')} />
                <Title dataAos={'fade-up'} delay={100} icon={<Mouce />} title={t('makhzon_complete')} title2={t('makhzon_complete2')} cn={' text-center mb-[60px] t25 !font-[400] mt-[10px] '}  />

                <div className='flex items-center flex-wrap justify-center gap-[20px] ' >

                    {
                        data?.map((e,i)=> (
                            <div key={i} data-aos="fade-up" data-aos-delay={200}  className=' relative max-md:justify-start group duration-300 rounded-[10px] overflow-hidden max-md:max-w-[230px] max-md:min-h-[230px] max-sm:max-w-full max-sm:h-fit h-full max-w-[550px] min-h-[350px] flex flex-col items-center justify-center p-[20px] w-full ' style={{boxShadow : "0px 10px 60px 0px #262D7614"}} > 
                                <Image className=' absolute inset-0 object-cover w-full h-full  ' alt='' src={"/imgs/frame.png"} width={550} height={350}  />
                                <div className='absolute inset-0 h-full w-full opacity-90 ' style={{background : e.key === "blue" ? "linear-gradient(180deg, #09396F 0%, #0F3762 100%)" : "linear-gradient(180deg, #FAAB27 0%, #F9A51A 100%)" }} > </div>
                                
                                <div className=' relative z-[12] flex items-center flex-col gap-[5px] ' >
                                    <div className='w-[70px] flex items-center justify-center h-[70px] ' >
                                        <Image className={`${e.key == "blue" && "scale-[1.6] " } max-auto `} alt='' src={e.icon}  width={70} height={70} />

                                    </div>
                                    <h3 className=' select-none duration-300 text-center t20 font-[400] text-white mt-[10px]  ' > {e.title} </h3>
                                    <p className=' select-none  duration-300 text-center t17 font-[300] text-white  ' > {e.desc} </p>
                                    <Button cn={`${ e.key == "blue" ? "!text-secondery " : " !text-primary " } mt-[20px] bg-white  mx-auto`}  shadow={false } icon={<ArrowRight cn={`${e.key == "blue" ? "stroke-secondery" : " group-hover:!stroke-primary "}`}  />} name={e.button} href={e.href} />
                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>
		</div>
    );
}
