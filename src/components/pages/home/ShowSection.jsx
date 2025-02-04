import Image from 'next/image'
import React from 'react'

export default function ShowSection({data , dir}) {

  return (
	<div className='container grid  grid-cols-2 max-lg:grid-cols-1  items-center gap-[40px] my-[40px] py-[30px] ' >
		
		<div className={`row max-lg:mx-auto flex  ${dir == "rtl" ? "justify-end" : "justify-start"} `}>
			<Image className=' max-md:px-[50px] '  src={data.img} alt='' width={550} height={450} />
		</div>

		<div className={`row relative p-[20px] ${dir == "rtl" ? "order-[-1] max-lg:order-1 " : "" } `}  >
			<Image className=' ltr:scale-[-1] opacity-70 inset-0 w-full h-full absolute' src={data.shadowImg} alt='' width={550} height={450} />

			<h2 className='text-secondery t25 max-sm:t17 font-semibold max-lg:text-center max-lg:text-balance ' >  
				{data.title}
				<span className='text-primary'> {data.title2} </span>
				{data.title3}
			</h2>

			{
				data.lists?.map((e,i)=>(
					<div className='flex max-lg:flex-col items-center gap-[10px] mt-[40px] ' >
						<Image width={55} height={55} alt='' src={e.icon} />
						<div  > 
							<h4 className='max-lg:text-center max-lg:text-balance max-sm:t16 t22 font-normal text-secondery ' > {e.title} </h4>
							<h5 className='max-lg:text-center max-lg:text-balance   t15 font-normal text-[#a0a6c0]' > {e.desc} </h5>
						</div>

					</div>
				))
			}


		</div>
	</div>
  )
}
