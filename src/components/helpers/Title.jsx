import React from 'react';

export default function Title({ dataAos , delay , title, title2 , cn }) {
    return (
        <h2  data-aos={dataAos} data-aos-delay={delay} className={` ${cn} text-balance  text-secondery t25 font-semibold max-lg:text-center max-lg:text-balance`}>
            {title}
            <span className='text-primary'> {title2} </span>
        </h2>
    );
}
