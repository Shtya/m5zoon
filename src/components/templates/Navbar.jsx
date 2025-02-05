'use client';
import { X as Close, Handshake, Headset, House, MapPin, Package } from 'lucide-react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Button from '../atoms/Button';
import { gsap } from 'gsap';
import X from '../svg/X';
import ArrowRight from '../svg/Arrow-right';
import Translate from '../atoms/Translate';

export default function Navbar() {
    const t = useTranslations();
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTransparent, setIsTransparent] = useState(true);

    const links = [
        { icon : <House /> , name: t('home'), value: '/' },
        { icon : <Package /> , name: t('our_services'), value: '/our-services' },
        { icon : <Handshake /> , name: t('success_partners'), value: '/success-partners' },
        { icon : <MapPin /> , name: t('our_locations'), value: '/our-locations' },
        { icon : <Headset /> , name: t('contact_us'), value: '/contact-us' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        } else {
            setIsMenuOpen(true);
        }
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false); // Hide navbar on scroll down
        } else {
            setIsVisible(true); // Show navbar on scroll up
        }

        // Check if the user has scrolled past the hero section (e.g., 100px)
        setIsTransparent(currentScrollY <= 10);

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        // setIsMenuOpen(window.innerWidth <= 1000);
        const handleResize = () => {
            setIsMenuOpen(window.innerWidth <= 1000 ? false : false);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const [isAllowed, setisAllowed] = useState(true)
    useEffect(() => {
        if( ["/sign-up"].includes(pathname) ){
            setisAllowed(false)
        }
        else{
            setisAllowed(true)
        }
    },[pathname])

    return (
        <div className='z-[1000] relative  '>
            <nav className={`fixed top-0 left-[50%] translate-x-[-50%] w-full transition-all  duration-300 z-50  ${isTransparent ? 'bg-transparent' : `backdrop-blur-md bg-fixed bg-cover bg-center bg-secondery shadow-md`}`}>
                <div className=' container h-[80px] max-lg:px-[40px] flex justify-between items-center py-3  '>
                    <Link href='/' className='text-2xl font-bold'>
                        <Image className={` ${!isTransparent ? ' ml-0 mr-0 ' : 'xl:ltr:ml-[100px] xl:rtl:mr-[100px]'}  duration-300 max-md:w-[85px]  w-[145px]  object-contain`} width={145} height={45} alt='' src={ isAllowed ?( !isVisible ? "/imgs/logo.png" :  '/imgs/logo.png') : "/imgs/logo2.png" } />
                    </Link>

                    <ul className='hidden min-[1200px]:flex gap-[50px] items-center'>
                        <div className='flex gap-[28px] items-center '>
                            {links.map(link => (
                                <Link key={link.value} href={link.value} className={` text-lg font-normal ${pathname === link.value ? 'text-primary' : `${isTransparent ? 'text-[#57677A] ' : 'text-white'}`}`}>
                                    {link.name}
                                </Link>
                            ))}
                            <Translate cn={`${isTransparent ? 'text-[#57677A] ' : 'text-white stroke-white '}`} />
                        </div>
                        <Button  shadow={isTransparent ? true : false } icon={<ArrowRight  />} name={t('login')} href='/login' />
                    </ul>

                    <X cnPath={`stroke-black group-hover:stroke-primary duration-300 max-md:stroke-white ${isTransparent ? "stroke-black" : "stroke-white" } `} cn={' group min-[1200px]:hidden w-[24px] h-[24px] flex items-center cursor-pointer'} onClick={toggleMenu} />
                </div>
            </nav>

            <div className={`fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-90 transition-all duration-300 custom-cursor  rtl:scale-x-[-1] backdrop-blur-[5px] ${isMenuOpen ? 'square-100' : 'square-0'}`} onClick={toggleMenu}></div>

            <div className={`${isMenuOpen ? 'ltr:left-0 rtl:right-0' : 'ltr:left-[-400px] rtl:right-[-400px]'} fixed top-0 z-[1000] w-full max-w-[350px] h-full p-5 shadow-lg bg-cover bg-center bg-secondery/70 backdrop-blur-[10px] transition-all duration-300 `}>
                <div className='flex py-[20px] items-center justify-between'>
                    <Link href='/' className='text-2xl font-bold'> <Image className='xl:ltr:ml-[100px] xl:rtl:mr-[100px] max-md:w-[80px] w-[115px] object-contain' width={145} height={45} alt='Logo' src={'/imgs/logo.png'} /> </Link>
                    <Close className='text-white scale-[1.2] cursor-pointer hover:scale-[1.3] duration-300' onClick={toggleMenu} />
                </div>
                <hr className='w-[90%] mx-auto border-t-white border-t-[1px] my-[20px] opacity-30' />
                <ul className='flex  flex-col gap-[10px] pt-[10px]  '>
                    {links.map(link => (
                        <Link key={link.value} href={link.value} onClick={toggleMenu} className={` px-[15px] py-[10px] rounded-[5px] flex items-center gap-[10px] rtl:mr-[20px] ltr:ml-[20px] hover:bg-primary duration-300 t20 capitalize !font-[500] text-white ${pathname === link.value ? 'bg-primary  ' : ''}`}>
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                    <Translate cnParent={"rtl:flex-row-reverse !gap-[10px] !justify-end px-[30px] "} cn={"text-white stroke-white   "} />
                    <Button icon={<ArrowRight  />} cn={'mt-[50px] absolute bottom-[20px] left-[20px] !shadow-none hover:!bg-opacity-80 hover:!bg-primary '} name={t('login')} href='/login' />
                </ul>
            </div>

        </div>
    );
}
