"use client"
import Navbar from './Navbar'
import Footer from '../atoms/Footer'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from '@/navigation';

export default function Layout({children}) {

	useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 1000,
            easing: 'ease-in-out',
            once: false // true,
        });
    }, []);


    const pathname = usePathname()
    const [isAllowed, setisAllowed] = useState(false)
        useEffect(() => {
            if( ["/sign-up" , "/login"].includes(pathname) ){
                setisAllowed(false)
            }
            else{
                setisAllowed(true)
            }
        },[pathname])


  return (
	<div className=' main  relative' >
		{isAllowed && <Navbar />}
		<main className='min-h-screen' > {children} </main>
		{isAllowed && <Footer />}
	</div>
  )
}









