import Image from 'next/image'
import React from 'react'

export default function Brands() {

	const imgs = [
		"/fulfillment/1.png", 
		"/fulfillment/2.png" , 
		"/fulfillment/3.png" , 
		"/fulfillment/2.png" , 
		"/fulfillment/4.png" ,
		"/fulfillment/5.png" ,
		"/fulfillment/4.png" ,
	]
  return (
	<div className='bg-[#fbfcff] py-[40px] relative ' >
		<div className="container flex items-center justify-center gap-[40px] flex-wrap   ">
			{
				imgs.map((img, index) => (
					<Image data-aos="zoom-in" data-aos-delay={`${index+1}00`} className="w-[120px] max-lg:w-[100px] max-md:w-[80px]  min-h-[45px] flex items-center justify-center object-center object-contain " key={index} src={img} width={120} height={50} alt="icon"  />
				))
			}
		</div>
	</div>
  )
}
