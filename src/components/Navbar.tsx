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
                <Link href="/" className="text-xl font-black tracking-widest text-white uppercase">
                    FITLOG
                </Link>
            </div>

            <div className="flex items-center justify-center">
                <div role="tablist" className="tabs bg-black/40 p-1 rounded-full gap-1 border border-white/10">
                    <Link href="/" role="tab"
                        className={path == "/" ? "tab tab-active rounded-full text-sm font-semibold bg-lime-400 text-black shadow-md" : "tab rounded-full text-sm font-semibold text-gray-400 hover:text-white"}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/list"
                        role="tab"
                        className={path == "/list" ? "tab tab-active rounded-full text-sm font-semibold bg-lime-400 text-black shadow-md" : "tab rounded-full text-sm font-semibold text-gray-400 hover:text-white"}
                    >
                        My Plan
                    </Link>
                </div>
            </div>

            <div className="flex items-center gap-5 text-sm font-medium">

                <Link href="/plan" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-gray-300">Plan</span>
                    <span className="badge border-none bg-[#ccff00] font-bold text-black px-2.5 py-3 rounded-full">
                        {context ? context.planList.length : "0"}
                    </span>
                </Link>

                <Link href="/saved" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-gray-300">Saved</span>
                    <span className="badge badge-outline border-gray-600 text-gray-300 px-2.5 py-3 rounded-full">
                        {context?context.savedList.length :"0"}
                    </span>
                </Link>
            </div>
        </div>
    </div>
);
};

export default Navbar;