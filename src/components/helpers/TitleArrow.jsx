import React from 'react';

export default function TitleArrow({ dataAos , delay , title , cn  }) {
    return (
        <h2  data-aos={dataAos} data-aos-delay={delay} 
            className={` ${cn} text-center  flex items-center justify-center gap-[10px] text-primary t16 font-[400] `}>
                <span className='w-[50px] h-[3px] bg-primary ' ></span>
                {title}
                <span className='w-[50px] h-[3px] bg-primary ' ></span>
        </h2>
    );
}
