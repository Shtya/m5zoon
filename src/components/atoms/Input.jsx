"use client"
import React , {useState} from 'react'
import Image from "next/image"
import { useTranslations } from 'next-intl'


export default function Input({ required , place , dataAos , error , cnInput , cn , label , type , icon , KEY , register , cnLabel}) {
  const t = useTranslations()
  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {
	type == "password" &&
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };


	return (
	<div data-aos={dataAos} className={`${cn} flex flex-col  gap-[15px]  relative `} >
		{label && <label htmlFor={KEY} className={`${cnLabel} text-black/60 text-[22px] font-normal `} > {label} <span className='text-[#ff4b55]' > {required && "*"} </span> </label> }
		
		<div  className={`h-[60px]  relative overflow-hidden rounded-lg border border-[#7d7d7d]/20 w-full ${cnInput} `} >
			<input className={`placeholder:text-[#979797]/60 text-[#979797] text-xl font-normal  w-full ${icon ? "ltr:pr-[40px] rtl:pl-[40px]" : "" } px-[10px] h-full outline-none `} {...register} id={KEY} placeholder={place} type={inputType} />
			{icon && <Image onClick={toggleInputType} className='absolute hover:opacity-50 duration-300 ltr:right-[10px] cursor-pointer rtl:left-[10px] top-[50%] translate-y-[-50%] '  src={ inputType == "password" ? icon : "/imgs/sign-up/eye-opened 1.svg" } alt="" width={20} height={20} /> }
		</div>

		{error && <div className='error text-[#ff4b55] mt-[-10px]  t14  ' > {t(error?.message)} </div>}
	</div>
  )
}
