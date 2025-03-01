"use client"
import Navbar from './Navbar'
import Footer from './Footer'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from '@/navigation';
import ScrollToTop from '../atoms/ScrollToTop';

export default function Layout({children}) {

	useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 600,
            easing: 'ease-in-out',
            once: false // true,
        });
    }, []);


    const [showFooter , setShowFooter] = useState(true)
    const pathname = usePathname()
    const [isAllowed, setisAllowed] = useState(false)
        useEffect(() => {
            if( ["/sign-up" , "/login"].includes(pathname)  ){
                setisAllowed(false)
            }
            else{
                setisAllowed(true)
            }



            if(pathname.startsWith("/services")) setShowFooter(false)
            else setShowFooter(true)
        },[pathname])


  return (
	<div className=' main  relative w-full ' >
		{isAllowed && <Navbar />}
		<main className='min-h-[50vh]' > {children} </main>
		{isAllowed && showFooter && <Footer />}
        <ScrollToTop />
	</div>
  )
}









