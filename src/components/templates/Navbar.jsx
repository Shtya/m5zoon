'use client';
import { X as Close } from 'lucide-react';
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
        { name: t('home'), value: '/' },
        { name: t('our_services'), value: '/our-services' },
        { name: t('success_partners'), value: '/success-partners' },
        { name: t('our_locations'), value: '/our-locations' },
        { name: t('contact_us'), value: '/contact-us' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsAnimating(false);
            }, 300); // Match duration-300
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
        setIsTransparent(currentScrollY <= 100);

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

    return (
        <div className='z-[1000] relative  '>
            <nav className={`fixed container top-0 left-[50%] translate-x-[-50%] w-full transition-all  duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-[160px]'} ${isTransparent ? 'bg-transparent' : `bg-fixed bg-cover bg-center bg-[url('/imgs/frame-left.png')] shadow-md`}`}>
                <div className='  h-[80px] max-lg:px-[40px] flex justify-between items-center py-3  '>
                    <Link href='/' className='text-2xl font-bold'>
                        <Image className=' xl:ltr:ml-[100px] xl:rtl:mr-[100px] max-md:w-[85px]  w-[145px]  object-contain' width={145} height={45} alt='' src={'/imgs/logo.png'} />
                    </Link>

                    <ul className='hidden min-[1200px]:flex gap-[50px] items-center'>
                        <div className='flex gap-[28px] items-center '>
                            {links.map(link => (
                                <Link key={link.value} href={link.value} className={` text-lg font-normal ${pathname === link.value ? 'text-primary' : `${isTransparent ? 'text-[#57677A] ' : 'text-white'}`}`}>
                                    {link.name}
                                </Link>
                            ))}
                            <Translate />
                        </div>
                        <Button icon={<ArrowRight />} name={t('login')} href='/login' />
                    </ul>

                    <X cnPath={'stroke-black group-hover:stroke-primary duration-300 '} cn={' group min-[1200px]:hidden w-[24px] h-[24px] flex items-center cursor-pointer'} onClick={toggleMenu} />
                </div>
            </nav>

            {/* <div className={`fixed top-0 left-0 w-full h-full  z-50 ${isMenuOpen ? " opacity-100 " : " opacity-0   "} `}>
                <div onClick={toggleMenu} className={` ${isMenuOpen ? "rtl:left-0 ltr:right-0" : "rtl:left-[-400px] ltr:right-[-400px]"} overlay w-full h-full bg-black/90`} ></div>

                <div className={`${isMenuOpen ? "ltr:left-0 rtl:right-0 " : "ltr:left-[-400px] rtl:right-[-400px]"} ease-in-out duration-300 w-full max-w-[350px]  fixed top-0 z-[1000] bg-fixed bg-secondery bg-cover bg-center bg-[url('/imgs/frame-left.png')] h-full shadow-lg p-5`}>
                    <div className="flex py-[20px] items-center justify-between" >
                        <Link href='/' className='text-2xl font-bold'>
                            <Image className=' xl:ltr:ml-[100px] xl:rtl:mr-[100px] max-md:w-[85px]  w-[145px]  object-contain' width={145} height={45} alt='' src={'/imgs/logo.png'} />
                        </Link>
                        <Close className="text-white scale-[1.5] cursor-pointer hover:scale-[1.3] duration-300 " onClick={toggleMenu} /> 
                    </div>
                    <hr className="w-[90%] mx-auto border-t-primary border-t-[1px] my-[20px] opacity-70 " />
                    
                    <ul className='flex flex-col gap-5 pt-[20px] '>
                        {links.map(link => (
                            <Link key={link.value} href={link.value} onClick={toggleMenu} className={` hover:text-primary duration-300 t25 uppercase !font-[500] ${pathname === link.value ? 'text-primary' : 'text-white'}`}>
                                {link.name}
                            </Link>
                        ))}
                        <Button cn={" mt-[50px] absolute bottom-[20px]  !shadow-none hover:bg-primary !w-[310px] "} name={t('login')} href='/login' />
                    </ul>
                </div>
            </div> */}

            <div className={`fixed top-0 left-0 w-full h-full z-50 bg-black/90 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleMenu}></div>

            {/* === Sidebar Menu === */}
            <div
                className={`fixed top-0 z-[1000] w-full max-w-[350px] h-full p-5 bg-secondery shadow-lg bg-cover bg-center bg-[url('/imgs/frame-left.png')] transition-transform duration-300
          ${isMenuOpen ? 'ltr:left-0 rtl:right-0' : 'ltr:left-[-400px] rtl:right-[-400px]'}`}>
                {/* === Header === */}
                <div className='flex py-[20px] items-center justify-between'>
                    <Link href='/' className='text-2xl font-bold'>
                        <Image className='xl:ltr:ml-[100px] xl:rtl:mr-[100px] max-md:w-[85px] w-[145px] object-contain' width={145} height={45} alt='Logo' src={'/imgs/logo.png'} />
                    </Link>
                    <Close className='text-white scale-[1.5] cursor-pointer hover:scale-[1.3] duration-300' onClick={toggleMenu} />
                </div>
                <hr className='w-[90%] mx-auto border-t-primary border-t-[1px] my-[20px] opacity-70' />

                {/* === Navigation Links === */}
                <ul className='flex flex-col gap-5 pt-[20px]'>
                    {links.map(link => (
                        <Link key={link.value} href={link.value} onClick={toggleMenu} className={`hover:text-primary duration-300 t25 capitalize !font-[500] ${pathname === link.value ? 'text-primary' : 'text-white'}`}>
                            {link.name}
                        </Link>
                    ))}
                    <Button cn={'mt-[50px] absolute bottom-[20px] !shadow-none hover:bg-primary !w-[310px]'} name={t('login')} href='/login' />
                </ul>
            </div>
        </div>
    );
}
