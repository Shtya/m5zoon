import { useRouter } from '@/navigation';
import Image from 'next/image';
import React from 'react';

export default function Button({ name, cn, href , icon }) {
    const router = useRouter();

    const handleOnClick = () => {
        if (href) {
            router.push(href);
        }
    };

    return (
        <div onClick={handleOnClick} className={`${cn}  shadow-[0px_38px_50px_0px_rgba(229,231,242,1.00)] group cursor-pointer hover:bg-secondery duration-300 w-fit h-[50px] max-sm:px-[15px] px-[30px] py-[5px] bg-[#f9a51a] rounded-[10px]  flex justify-center items-center gap-2.5 `}>
            <div className='text-center text-white text-base font-medium '> {name} </div>
            {icon}
			
        </div>
    );
}
