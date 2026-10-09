"use client";
import React from 'react';
import Link from 'next/link';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { Workout } from '@/context/Context';

const Navbar = () => {
   
    const path = usePathname();
    const context = useContext(Workout);

return (
    <div className="container mx-auto">
        <div className="flex items-center justify-between px-6 py-3">
            <div className='flex justify-center gap-2'>
                <Image alt='logo' src={logo} />
                <Link href="/" className="tracking-widest  font-['Oswald'] text-[18px] font-bold text-[#ffffff] uppercase">
                    FITLOG
                </Link>
            </div>

            <div className="flex items-center justify-center">
                <div role="tablist" className="tabs bg-black/40 p-1 rounded-full gap-1 border border-white/10">
                    <Link href="/" role="tab"
                        className={path == "/" ? " font-['Inter'] text-[12px] font-semibold text-[#c2f800]  tab tab-active rounded-full text-sm bg-[#1a2312] shadow-md" : "tab rounded-full text-sm  font-['Inter'] text-[12px] font-medium  text-[#9ca3af] hover:text-white"}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/list"
                        role="tab"
                        className={path == "/list" ? " font-['Inter'] text-[12px] font-semibold text-[#c2f800]  tab tab-active rounded-full text-sm bg-[#1a2312] shadow-md" 
                            :
                             "tab rounded-full text-sm  font-['Inter'] text-[12px] font-medium  text-[#9ca3af] hover:text-white"}
                    >
                        My Plan
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-5 text-sm font-medium">

                <Link href="/plan" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-[#d1d5db] font-['Inter'] text-[12px] font-medium ">Plan</span>
                    <span className="badge border-none bg-[#c2f800]font-bold text-black px-2.5 py-3 rounded-full">
                        {context ? context.planList.length : "0"}
                    </span>
                </Link>

                <Link href="/saved" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-[#9ca3af]  font-['Inter'] text-[12px] font-medium ">Saved</span>
                    <span className="badge badge-outline border-[#2d313b] text-[#d1d5db] px-2.5 py-3 rounded-full  font-['Inter'] text-[11px] font-medium ">
                        {context?context.savedList.length :"0"}
                    </span>
                </Link>
            </div>
        </div>
    </div>
);
};

export default Navbar;