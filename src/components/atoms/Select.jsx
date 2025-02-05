'use client';
import { ChevronUp } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, {  useEffect, useRef, useState } from 'react';

const Select = ({cnSelect ,label , cnInput , dataAos , required , error , trigger , watch , KEY, setValue, icon, data, cn, place }) => {
    const t = useTranslations()

  const [val, setval] = useState();
  const [show, setShow] = useState(false);

  const handleValue = e => {
    setval({ name: e?.value , icon : e.icon });
    setValue?.(KEY, e?.name);
    setShow(false);
  };

  const watchKey = watch?.(KEY)
  useEffect(()=>{
    if(watchKey)  trigger?.(KEY) 
    },[watchKey])
  

  const selectRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = event => {
      if (selectRef.current && !selectRef.current.contains(event.target)) setShow(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div ref={selectRef} data-aos={dataAos}  className={`${cn} z-[100] relative flex  flex-col gap-[15px]  w-full `}>
      {label && <label htmlFor={KEY} className={` font-[400] text-[14px] text-[#333333] `} > {label} {required && <span className='text-[#ff4b55]' > * </span> } </label> }

      <div onClick={() => setShow(!show)} className={` ${cnSelect} px-[10px] border-[#e5e5e5] outline-none border duration-300 rounded-[8px] cursor-pointer w-full h-[59px] flex justify-between items-center`}>
        <div className='flex items-center gap-[9px] '>
            {val?.icon && <Image className=' flex-none w-[20px] h-[20px] object-cover rounded-[50%] ' src={val?.icon} alt='' width={20} height={20} />}
            <div className={` ${cnInput} font-[400] text-[18px] ${val?.name ? 'text-[#555] ' : 'text-[#979797]/60'} `}> {val?.name || place} </div>
        </div>
        <svg  className={`${show ? 'rotate-[180deg]' : ''}  w-[12px] h-[12px] duration-300 `} width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.23824 7.16669L0.0605469 1.82294L1.78726 0.041687L5.23824 3.60419L8.68922 0.041687L10.4159 1.82294L5.23824 7.16669Z" fill="#CDCDCD"/> </svg>
      </div>

        <div style={{direction:"ltr"}} className={`almarai ${show ? 'opacity-100 pointer-events-auto' : ''} z-[10000]  max-h-[200px] overflow-auto  duration-300 shadow-md opacity-0 pointer-events-none ease-in-out absolute top-[110%] w-full bg-white `}>
          {data.map((e, i) => (
            <div className=' gap-[5px] hover:bg-secondery hover:text-white text-[#555] text-[16px] font-[500] duration-100 min-h-[40px] cursor-pointer flex items-center px-[10px] ' key={i} onClick={_ => handleValue(e)}>
              <Image className='flex-none w-[20px] h-[20px] object-cover rounded-[50%] ' src={e.icon} alt='' width={20} height={20} />
              <span className='capitalize space-x-[1] '>  {e.value}  </span>
            </div>
          ))}
        </div>


      {error && <div className='error absolute ' > {t(error?.message)} </div>}
    </div>
  );
};

export default Select;
