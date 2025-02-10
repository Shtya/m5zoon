import Button from '@/components/atoms/Button';
import Title from '@/components/helpers/Title';
import React from 'react';

export default function Hero({t , data}) {
    return (
        <div className='h-screen max-md:pt-[60px] relative '>
			<video  autoPlay  loop  muted  playsInline  className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[1] ">
				<source src={data?.img} type="video/mp4" />
			</video>

      		<div className="absolute z-[12] top-0 left-0 w-full h-full " style={{backgroundImage : "linear-gradient(354deg, rgba(11, 49, 92, 0.11) -49.44%, #00162F 112.51%)"}} ></div>

            <div className='container relative z-[20] max-w-[880px] flex flex-col max-md:gap-[15px] gap-[40px] items-center justify-center min-h-screen '>
                <Title dataAos={'fade-down'} delay={200} order={-1} title={data?.title} title2={data?.title2} cn={'t35 max-md:t25 max-sm:t20 font-[600] text-white text-center '} />
                <p data-aos='fade-down' className='text-[#F2F2F2] font-[400] t20 max-md:t18 max-sm:t15 text-center '> {data?.desc} </p>

                <div data-aos='fade-up' data-aos-delay='200' className='flex gap-[10px] w-full justify-center '>
                    <Button
                        cn={' bg-white !text-black '}
						href={data?.href1}
                        name={data?.btn1}
                        icon={    <svg className='max-sm:w-[14px] stroke-black ' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>        {' '}        <path d='M6.03317 1.66669H4.44984C2.62484 1.66669 1.6665 2.62502 1.6665 4.44169V6.02502C1.6665 7.84169 2.62484 8.80002 4.4415 8.80002H6.02484C7.8415 8.80002 8.79984 7.84169 8.79984 6.02502V4.44169C8.80817 2.62502 7.84984 1.66669 6.03317 1.66669Z' fill='white' /> <path d='M15.5585 1.66669H13.9752C12.1585 1.66669 11.2002 2.62502 11.2002 4.44169V6.02502C11.2002 7.84169 12.1585 8.80002 13.9752 8.80002H15.5585C17.3752 8.80002 18.3335 7.84169 18.3335 6.02502V4.44169C18.3335 2.62502 17.3752 1.66669 15.5585 1.66669Z' fill='white' /> <path d='M15.5585 11.1917H13.9752C12.1585 11.1917 11.2002 12.15 11.2002 13.9667V15.55C11.2002 17.3667 12.1585 18.325 13.9752 18.325H15.5585C17.3752 18.325 18.3335 17.3667 18.3335 15.55V13.9667C18.3335 12.15 17.3752 11.1917 15.5585 11.1917Z' fill='white' /> <path d='M6.03317 11.1917H4.44984C2.62484 11.1917 1.6665 12.15 1.6665 13.9667V15.55C1.6665 17.375 2.62484 18.3333 4.4415 18.3333H6.02484C7.8415 18.3333 8.79984 17.375 8.79984 15.5583V13.975C8.80817 12.15 7.84984 11.1917 6.03317 11.1917Z' fill='white' />{' '}    </svg>}
                    />
                    <Button
                        cn={'bg-primary  '}
						href={data?.href2}
                        name={data?.btn2}
                        icon={    <svg className='max-sm:w-[14px] ' xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>        {' '}        <path d='M6.50016 1.83331L7.16683 4.24998M4.75016 6.66665L2.3335 5.99998M12.1668 3.41665L10.5002 4.99998M5.50016 9.99998L3.91683 11.6666M8.00016 7.49998L12.1668 17.5L13.6668 13.1666L18.0002 11.6666L8.00016 7.49998Z' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />{' '}    </svg>}
                    />
                </div>
            </div>

			<div className=" max-lg:hidden shape absolute  bottom-[-10px] z-[22] left-0 w-full h-[60px] bg-gradient-to-b from-white/20 to-white "></div>
			<div className=" max-lg:hidden shape absolute  bottom-[-10px] z-[21] left-0 w-full h-[80px]  bg-[#eaf6ff]  "></div>
        </div>



    );
}
