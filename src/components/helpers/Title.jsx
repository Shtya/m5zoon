import React from 'react';

export default function Title({ title, title2 , cn }) {
    return (
        <h2 className={` ${cn} text-secondery t25 font-semibold max-lg:text-center max-lg:text-balance`}>
            {title}
            <span className='text-primary'> {title2} </span>
        </h2>
    );
}
