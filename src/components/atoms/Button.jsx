import { useRouter } from '@/navigation';
import Image from 'next/image';
import React from 'react';

export default function Button({ delay , dataAos , shadow , name, cn, href , icon }) {
    const router = useRouter();

    const handleOnClick = () => {
        if (href) {
            router.push(href);
        }
    };

    return (
        <div data-aos={dataAos} data-aos-delay={delay} onClick={handleOnClick} className={`${cn} ${shadow && "shadow-[0px_38px_50px_0px_rgba(229,231,242,1.00)]" }  group cursor-pointer hover:bg-secondery duration-300 w-fit min-h-[50px] max-sm:min-h-[45px] max-sm:px-[10px] px-[20px] py-[5px] bg-[#f9a51a] rounded-[10px]  flex justify-center items-center gap-[10px] max-sm:gap-[2px] `}>
            <div className='text-center text-white t16 max-sm:t14 font-medium '> {name} </div>
            <span  > {icon} </span>
			
        </div>
    );
}
