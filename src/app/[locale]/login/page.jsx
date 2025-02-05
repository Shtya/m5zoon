'use client';
import Button from '@/components/atoms/Button';
import Checkbox from '@/components/atoms/Checkbox';
import Input from '@/components/atoms/Input';
import Radio from '@/components/atoms/Radio';
import SelectBox from '@/components/atoms/SelectBox';
import Translate from '@/components/atoms/Translate';
import Title from '@/components/helpers/Title';
import { hookSignUp } from '@/hooks/hookSignUp';
import { Link } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

export default function page() {
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();

    const t = useTranslations('sign-up');

    const TypeAccount = [
        { key: 'key1', img: '/imgs/sign-up/1.png', name: t('marketer'), value: 'marketer' },
        { key: 'key2', img: '/imgs/sign-up/2.png', name: t('supplier'), value: 'supplier' },
        { key: 'key3', img: '/imgs/sign-up/3.png', name: t('fulfillment'), value: 'fulfillment' },
    ];

    const termsLabel = <span className='text-[#1f1f1f] w-full text-lg font-normal flex items-center justify-between '> {t('remember_me')} </span>;
    const locale = useLocale()

    return (
        <div className='login'>
            <div className='max-md:!w-[100%]  max-md:mx-auto  max-md:!right-[unset] max-md:left-0 absolute h-[100vh]  duration-300 w-[50%] top-0 ltr:left-0  rtl:right-0 z-[1000]   '>
                <div  style={{direction : locale == "en" ? "rtl" : "ltr"}} className='h-[100vh] overflow-auto max-md:!max-w-full bg-opacity-[.95] backdrop-blur-2xl bg-white rtl:mr-auto ltr:ml-auto max-w-[700px] w-full relative max-lg:p-[20px]  p-[50px] '>
                    <div style={{direction : locale == "en" ?  "ltr" :"rtl"}} >
                        <div className=' mt-[-30px] max-lg:!mt-0  flex justify-between items-center'>
                            <Translate />
                            <Link href={'/'}>
                                <Image src={'/imgs/logo2.png'} alt='' width={120} height={40} />
                            </Link>
                        </div>

                        <div className='pt-[40px] flex flex-col justify-start h-full'>
                            <Title cn={' !text-right ltr:!text-left text-[#09396f] text-4xl font-medium'} title={t('welcome_back')} title2={t('back')} />
                            <div className=' mt-[10px] text-[#637381] text-2xl font-normal '> {t('enter_your_details')} </div>

                            <div className='my-[70px]'>
                                <Radio setError={setError} watch={watch} setValue={setValue} KEY='type_account' cn='!grid grid-cols-3 max-md:grid-cols-3 max-[1150px]:grid-cols-2  ' data={TypeAccount} />
                            </div>

                            <form action='' className=' grid grid-cols-1 gap-x-[20px] gap-y-[40px] '>
                                <Input required={true} KEY={'email'} error={errors?.email} type={'email'} register={register('email')} place={t('enter_email')} label={t('email')} />
                                <Input required={true} KEY={'password'} error={errors?.password} type={'password'} register={register('password')} place={t('enter_password')} label={t('password_required')} icon={'/imgs/sign-up/eye-crossed 1.svg'} />
                            </form>

                            <div className='flex text-center justify-between mt-[40px] '>
                                <Checkbox cnLabel={'w-full'} cn={'!mt-0'} KEY={'rememberMe'} setValue={setValue} watch={watch} label={termsLabel} />
                                <Link href={'/forget-password'} className='text-[#f9a51a] text-lg font-normal underline'>
                                    {t('forgot_password')}
                                </Link>
                            </div>

                            <Button name={t('login')} cn={'  !max-w-[670px] !w-full mx-auto !my-[40px] hover:bg-opacity-90  bg-secondery '} />

                            <p className=' pb-[30px] text-center text-[#09396f] text-2xl font-normal'>
                                {t('no_account')}
                                <Link className='text-[#f9a51a]' href={'/sign-up'}>
                                    {t('join_us_now')}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-screen' >
                <div className='bg-black/20 max-md:w-[100%]  max-md:!right-[unset] max-md:left-0 absolute h-full duration-300  w-[50%] ltr:right-0 rtl:right-[50%] top-0  z-[10] '> </div>
                <Image className=' bg-[#083565] object-right-center object-cover max-md:w-[100%]  max-md:!right-[unset] max-md:left-0 absolute h-full duration-300  w-[50%] ltr:right-0 rtl:right-[50%] top-0  ' src={'/imgs/sign-up.png'} alt='' width={600} height={900} />
            </div>
        </div>
    );
}

/* 

    return (
        <div>
            <div className=' relative container h-[100vh] '>
				<div className='p-[50px] w-[700px] h-[100vh] overflow-auto ' >
				</div>
            </div>
			<Image className=' absolute h-full  w-[calc(100%-(50%-700px))] right-[calc(100%-(50%+700px))] top-0  '  src={"/imgs/sign-up.png"} alt='' width={600} height={900} />
        </div>
    );








					


*/
