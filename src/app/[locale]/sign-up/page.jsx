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
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

export default function page() {
    const { register, errors, trigger, clearErrors, setError, getValues, setValue, submit, watch, reset } = hookSignUp();

    const t = useTranslations('sign-up');

    const TypeAccount = [
        { key : "key1"  ,img: '/imgs/sign-up/1.png', name: t('marketer'), value: 'marketer' },
        { key : "key2"  ,img: '/imgs/sign-up/2.png', name: t('supplier'), value: 'supplier' },
        { key : "key3"  ,img: '/imgs/sign-up/3.png', name: t('fulfillment'), value: 'fulfillment' },
    ];

    const Experience = [
        { name: t('no'), value: 'no' },
        { name: t('yes'), value: 'yes' },
    ];

    const YearsOfExperience = [
        { name: t('no_experience'), value: 'no_experience' },
        { name: 1 , value: '1' },
        { name: 2 , value: '2' },
        { name: 3 , value: '3' },
        { name: 4 , value: '4' },
        { name: 5 , value: '5' },
        { name: 6 , value: '6' },
        { name: 7 , value: '7' },
        { name: t('more_than_7_years'), value: 'more_than_7_years' },
    ];
    const average_orders = [
        { name: 100 , value: '100' },
        { name: 300 , value: '300' },
        { name: 500 , value: '500' },
        { name: 1000 , value: '1000' },
        { name: 2500 , value: '2500' },
        { name: 5000 , value: '5000' },
        { name: 10000 , value: '10000' },
    ];


	const termsLabel = <span className='text-[#1f1f1f] text-lg font-normal' > 
		{t("terms_agreement")}   
		<span className='text-[#f9a51a] text-lg font-normal underline' > {t("terms_and_conditions")} </span>
		{t("and")}
		<span className='text-[#f9a51a] text-lg font-normal underline' > {t("privacy_policy")} </span>
		</span>



    return (
        <div>
            <div className='max-md:!w-[100%]  max-md:mx-auto  max-md:!right-[unset] max-md:left-0 absolute h-[100vh]  duration-300 w-[50%] top-0 ltr:left-0  rtl:right-0 z-[1000]   '>
				<div className='max-md:!max-w-full  bg-opacity-[.95] backdrop-blur-2xl bg-white rtl:mr-auto ltr:ml-auto max-w-[700px] w-full relative max-lg:p-[20px]  p-[50px]  h-[100vh]  overflow-auto ' >
					
					<div className=" mt-[-20px] max-lg:!mt-0 flex justify-between items-center">
						<Translate />
						<Link href={"/"} > <Image src={"/imgs/logo2.png"} alt="" width={120} height={40}  /> </Link>
					</div>

                    <div className='pt-[40px]  flex flex-col  justify-start h-full' >



					<Title cn={' !text-right ltr:!text-left text-[#09396f] text-4xl font-medium'} title={t('welcome')} title2={t('m5zoon')} />
					<div className=' mt-[10px] text-[#637381] text-2xl font-normal '> {t('enter_account_details')} </div>

					<div className='my-[70px]'>
						<Radio setError={setError} watch={watch} setValue={setValue} KEY='type_account' cn='!grid grid-cols-3 max-md:grid-cols-3  max-[1150px]:grid-cols-2  ' data={TypeAccount} />
					</div>


					<form action="" className=' grid grid-cols-2 max-lg:grid-cols-1 gap-x-[20px] gap-y-[40px] ' >
						<Input required={true} KEY={"first_name"}       error={errors?.first_name}       type={"text"}     register={register("first_name")}       place={t("first_name")}         label={t("first_name_required")}  />
						<Input required={true} KEY={"last_name"}        error={errors?.last_name}        type={"text"}     register={register("last_name")}        place={t("last_name")}          label={t("last_name_required")}  />
						<Input required={true} KEY={"email"}            error={errors?.email}            type={"email"}    register={register("email")}            place={t("enter_email")}        label={t("email_required")}  />
						<Input required={true} KEY={"phone_number"}     error={errors?.phone_number}     type={"text"}     register={register("phone_number")}     place={t("enter_phone_number")} label={t("phone_number_required")}  />
						<Input required={true} KEY={"password"}         error={errors?.password}         type={"password"} register={register("password")}         place={t("enter_password")}     label={t("password_required")} icon={"/imgs/sign-up/eye-crossed 1.svg"}  />
						<Input required={true} KEY={"confirm_password"} error={errors?.confirm_password} type={"password"} register={register("confirm_password")} place={t("enter_password")}     label={t("confirm_password_required")} icon={"/imgs/sign-up/eye-crossed 1.svg"}  />
					</form>

					<SelectBox  label={t("do_you_have_ecommerce_experience")} watch={watch} setValue={setValue} KEY='experience' cn='mt-[40px]' data={Experience} /> 
					<SelectBox  cnBtn={"!max-w-[110px]"} label={t("years_of_experience")} watch={watch} setValue={setValue} KEY='YearsOfExperience' cn='mt-[40px]' data={YearsOfExperience} /> 
					<SelectBox   label={t("average_orders")} watch={watch} setValue={setValue} KEY='average_orders' cn='mt-[40px]' data={average_orders} /> 

					<Checkbox KEY={"terms"} cn={"mt-[40px]"} setValue={setValue} watch={watch}  label={termsLabel} />

					<Button name={t("create_account")} cn={"  !max-w-[670px] !w-full mx-auto !my-[40px] hover:bg-opacity-90  bg-secondery "} />

					<p className=' pb-[30px] text-center text-[#09396f] text-2xl font-normal'>  {t("already_have_account")} <Link className='text-[#f9a51a]'  href={"/login"} > {t("login")} </Link>  </p>
				
                    </div>
				</div>
            </div>

			<Image className=' max-md:w-[100%]  max-md:!right-[unset] max-md:left-0 absolute h-full duration-300  w-[50%] ltr:right-0 rtl:right-[50%] top-0  '  src={"/imgs/sign-up.png"} alt='' width={600} height={900} />
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