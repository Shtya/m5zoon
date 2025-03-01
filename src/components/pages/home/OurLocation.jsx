import Title from '@/components/helpers/Title'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function OurLocation() {
	const t = useTranslations()
	const locale = useLocale()

	const imgs = [
		"/imgs/location/1.png",
		"/imgs/location/2.png",
		"/imgs/location/3.png",
		"/imgs/location/4.png",
	]


  return (
	<div className='container py-[30px] my-[40px] ' id='our-locations' >
				<Title cn={'text-center'} title={t('partners_message')} title2={t('sucees')} />
			
				<div className='mt-[50px] px-[40px] flex flex-wrap justify-between items-center max-md:justify-center  gap-[10px] ' >
					{
						imgs?.map((e,i)=> (
							<Image data-aos="zoom-in"  data-aos-delay={`${i+1}00`} className='w-[100%] object-contain max-w-[130px] h-fit max-sm:max-w-[80px]   drop-shadow-[0px_10px_20px_0px_rgba(185,185,185,0.25)]' src={e} width={130} height={160} alt='' key={i} />
						))
					}
					<Image data-aos="zoom-in"  data-aos-delay={`500`} className='w-[100%] object-contain max-w-[130px] h-fit max-sm:max-w-[80px]   drop-shadow-[0px_10px_20px_0px_rgba(185,185,185,0.25)]' src={locale == "ar" ? "/imgs/location/5.png" : "/imgs/location/6.png"  } width={130} height={160} alt='' />
				</div>
			</div>
  )
}
