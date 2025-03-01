'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {

  const [isAtFooter, setIsAtFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('footer-services'); 
            if (!footer) return;

            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // إظهار الزر عند التمرير
            setIsVisible(window.scrollY > window.innerHeight);

            // تغيير لون الزر عند وصوله إلى الفوتر
            setIsAtFooter(footerTop <= windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button onClick={scrollToTop} className={`fixed z-[10000]  ${isAtFooter ? "bottom-[400px]" :"bottom-6" } right-6   duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect className='duration-300' x='0.5' y='0.5' width='49' height='49' rx='24.5' stroke={!isAtFooter ? '#09396F' : '#fff'}  stroke-dasharray='2 2' />
                <rect className='duration-300' x='5' y='5' width='40' height='40' rx='20' fill={isAtFooter ? 'white' : '#09396F'} />
                <path className='duration-300' d='M30.0584 23.6002C29.9001 23.6002 29.7418 23.5419 29.6168 23.4169L25.0001 18.8002L20.3834 23.4169C20.1418 23.6585 19.7418 23.6585 19.5001 23.4169C19.2584 23.1752 19.2584 22.7752 19.5001 22.5335L24.5584 17.4752C24.8001 17.2335 25.2001 17.2335 25.4418 17.4752L30.5001 22.5335C30.7418 22.7752 30.7418 23.1752 30.5001 23.4169C30.3834 23.5419 30.2168 23.6002 30.0584 23.6002Z' fill={isAtFooter ? '#09396F' : '#fff'}  />
                <path className='duration-300' d='M25 32.7081C24.6583 32.7081 24.375 32.4248 24.375 32.0831V18.0581C24.375 17.7164 24.6583 17.4331 25 17.4331C25.3417 17.4331 25.625 17.7164 25.625 18.0581V32.0831C25.625 32.4248 25.3417 32.7081 25 32.7081Z' fill={isAtFooter ? '#09396F' : '#fff'}  />
            </svg>
        </button>
    );
};

export default ScrollToTop;
