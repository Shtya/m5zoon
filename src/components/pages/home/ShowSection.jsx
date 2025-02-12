import Image from 'next/image'
import React from 'react'

export default function ShowSection({data , dir}) {

  return (
	<div className='relative overflow-hidden ' > 
		<Image  className={`w-[700px] h-[700px]  ${dir == "rtl" ? "right-0 !bottom-0 " : "left-0"} bottom-[-200px] absolute`} src={data.shadowImg} alt='' width={550} height={450} />

		<div className='container grid  grid-cols-2 max-lg:grid-cols-1  items-center gap-[40px] my-[40px] py-[30px] ' >
			
			<div className={`row max-lg:mx-auto flex  ${dir == "rtl" ? "justify-end" : "justify-start"} `}>
				<Image  data-aos="zoom-in" className=' max-md:px-[50px] '  src={data.img} alt='' width={550} height={450} />
			</div>

			<div className={`row relative p-[20px] ${dir == "rtl" ? "order-[-1] max-lg:order-1 " : "" } `}  >

				<h2 data-aos="fade-up" className='text-secondery t25 max-sm:t17 font-semibold max-lg:text-center max-lg:text-balance ' >  
					{data.title}
					<span className='text-primary'> {data.title2} </span>
					{data.title3}
				</h2>

				{
					data.lists?.map((e,i)=>(
						<div  data-aos="fade-up"  data-aos-delay={`${i}00`} key={i} className='flex max-lg:flex-col items-center gap-[10px] mt-[40px] ' >
							<Image data-aos="zoom-in" width={55} height={55} alt='' src={e.icon} />
							<div  > 
								<h4 className='max-lg:text-center max-lg:text-balance max-sm:t16 t22 font-normal text-secondery ' > {e.title} </h4>
								<h5 className='max-lg:text-center max-lg:text-balance   t15 font-normal text-[#a0a6c0]' > {e.desc} </h5>
							</div>

						</div>
					))
				}


			</div>
		</div>

	</div>
  )
}
