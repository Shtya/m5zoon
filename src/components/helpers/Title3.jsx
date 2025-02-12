import React from 'react';

export default function Title3({ dataAos, delay, title, title2, cn, title3 }) {
    return (
        <h2 data-aos={dataAos} data-aos-delay={delay} className={` ${cn} text-balance   text-secondery max-sm:t20 t25 font-semibold max-lg:text-center max-lg:text-balance`}>
            {title}
            <span className='text-primary'> {title2} </span>
            {title3}
        </h2>
    );
}
