import Title from '@/components/helpers/Title'
import Image from 'next/image'
import React from 'react'

export default function InfoSec({data , order}) {
  return (
	<div className='grid grid-cols-1  md:grid-cols-2 items-center gap-[20px] lg:gap-[50px] ' >
		
		<div>
			<Title dataAos="fade-up" delay={100}  title={data.title} title2={data.title2} cnChild={'!justify-start max-md:!justify-center ltr:max-md:!text-center rtl:max-md:!text-center ltr:!text-left rtl:!text-right '} cn={"  t20 lg:t25  w-full !font-[400]"}  />
			<p data-aos="fade-up" data-aos-delay={200} className='t18 text-[#a0a6c0] max-md:text-center lg:mt-[20px] lg:leading-[35px] ' > {data?.desc} </p>
		</div>
		<Image className={` max-md:order-[-1] ${order} max-w-[500px] mx-auto w-full`} data-aos="zoom-in"  src={data?.img} alt={data?.title} width={500} height={340} />
	</div>
  )
}
