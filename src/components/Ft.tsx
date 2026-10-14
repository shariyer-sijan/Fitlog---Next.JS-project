import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from "@/assets/logo.png";

const Ft = () => {
    return (
        <footer className="w-full bg-[#0a0c0e] border-t border-gray-800/60 py-6 px-4 sm:px-6 lg:px-8 mt-auto ">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className='flex items-center justify-center gap-2'>
                    <Image alt='logo' src={logo} width={24} height={24} />
                    <Link href="/" className="tracking-widest font-['Oswald'] text-[14px] font-bold text-[#ffffff] uppercase">
                        FITLOG
                    </Link>
                </div>

                <div className="font-sans text-[12px] font-normal text-[#8a92a0] tracking-wide">
                    &copy; 2026 FitLog &mdash; Workout Library. Train hard, log honest.
                </div>
            </div>
        </footer>
    );
};

export default Ft;