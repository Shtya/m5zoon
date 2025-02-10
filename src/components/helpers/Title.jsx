import React from 'react';

export default function Title({ dataAos, delay, title, title2, cn, order, icon , cnChild }) {
    return (
        <h2 data-aos={dataAos} data-aos-delay={delay} className={` ${cn}    text-secondery t25 font-semibold max-lg:text-center `}>
            {order == -1 ? (
                <div className={`flex items-center flex-wrap justify-center gap-[10px] ${cnChild} `}>
                    <span>
                        <span className='text-primary'> {title2} </span> {title}
                    </span>
                    <span className='flex-none' > {icon} </span>
                </div>
            ) : (
                <div className={`flex items-center flex-wrap justify-center gap-[10px] ${cnChild} `}>
                    <span>
                        {title} <span className='text-primary'> {title2} </span>
                    </span>
                    <span className='flex-none' > {icon} </span>
                </div>
            )}
        </h2>
    );
}
