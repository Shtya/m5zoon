"use client"
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import Locale from '../svg/Locale';

export default function Translate({cn , cnParent}) {
  const router = useRouter();
  const pathname  = usePathname()
  const locale = useLocale()


  // Function to switch the language
  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'; 
    router.push(pathname, { locale: newLocale });
  };


  return (
    <div
      className={` ${cnParent} flex  items-center gap-[5px]  cursor-pointer  duration-200 justify-center`}
      onClick={switchLanguage} // Add onClick handler
    >
      <span style={{fontFamily : locale == "ar" ? "Inter" : "Norsal"}} className={`text-[#626262] text-lg font-normal ${cn} `} > {locale == "ar" ? "English" : "العربية"} </span>
      <Locale cn={cn} />
    
    </div>
  );
}