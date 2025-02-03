"use client"
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import Locale from '../svg/Locale';

export default function Translate() {
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
      className='flex items-center cursor-pointer hover:scale-[.98] duration-200 justify-center  '
      onClick={switchLanguage} // Add onClick handler
    >
      <span style={{fontFamily : locale == "ar" ? "Inter" : "Norsal"}} className='text-[#626262] text-lg font-normal' > {locale == "ar" ? "English" : "العربية"} </span>
      <Locale />
    
    </div>
  );
}