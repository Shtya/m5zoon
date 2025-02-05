"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';



const SelectBox = ({ label , watch  , setValue , cnBtn , KEY, cn ,  data }) => {
  const [checked, setChecked] = useState();
  const t = useTranslations()

  const handleChange = (e) => {
    setValue?.(KEY, e);
    setChecked(e);
  };



  const watchKey = watch?.(KEY)
  useEffect(()=> {
		if(watchKey) {
      handleChange(watchKey)
    }

    data && handleChange(data[0]?.value)
	} ,[])

  
  
  return (
    <div  className={`${cn}  flex flex-col items-start gap-[30px] max-lg:gap-[15px] `}>
      <p className=" block text-black/60 text-[22px] font-normal"> {label} </p>

      <div className='flex items-center gap-[30px] max-lg:gap-[15px] flex-wrap  w-full ' >
        {
          data?.map((e,i)=>(
            <div key={i} onClick={()=> handleChange(e.value) } className={`flex-none  ${checked == e.value ? "bg-[#f5f7fd] border-[#09396f] " : "bg-gray-50"} ${cnBtn} duration-300 border-dashed cursor-pointer hover:bg-[#f5f7fd] w-full max-w-[100px] h-10 p-2.5  rounded-[5px] border  justify-center items-center flex `} >
              <span className='text-center text-[#09396f] text-sm font-normal' > {e.name} </span>
            </div>
          ))
        }

      </div>

    </div>
  );
};

export default SelectBox;
