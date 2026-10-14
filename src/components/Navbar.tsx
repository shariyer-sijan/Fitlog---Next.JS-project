"use client";
import React from 'react';
import Link from 'next/link';
import logo from "@/assets/logo.png";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { Workout } from '@/context/Context';

const Navbar = () => {
    const path = usePathname();
    const context = useContext(Workout);

    return (
        <div className="w-full bg-[#0f1216] border-b border-gray-800/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-4 gap-4">
                    <div className="flex items-center justify-between w-full sm:w-auto">
                        <div className="flex items-center gap-2">
                            <Image alt='logo' src={logo} width={28} height={28} />
                            <Link href="/" className="tracking-widest font-['Oswald'] text-[18px] font-bold text-[#ffffff] uppercase">
                                FITLOG
                            </Link>
                        </div>
                        <div className="flex items-center gap-3 sm:hidden">
                            <Link href="/list" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                                <span className="text-[#d1d5db] font-sans text-[11px] font-medium">Plan</span>
                                <span className="badge border-none bg-[#c2f800] font-bold text-black px-2 py-2 rounded-full text-xs">
                                    {context ? context.planList.length : "0"}
                                </span>
                            </Link>
                            <Link href="/list" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                                <span className="text-[#9ca3af] font-sans text-[11px] font-medium">Saved</span>
                                <span className="badge badge-outline border-[#2d313b] text-[#d1d5db] px-2 py-2 rounded-full font-['Inter'] text-[10px] font-medium">
                                    {context ? context.savedList.length : "0"}
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full sm:w-auto overflow-x-auto py-1 sm:py-0">
                        <div role="tablist" className="tabs bg-black/40 p-1 rounded-full gap-1 border border-white/10 shrink-0">
                            <Link href="/" role="tab"
                                className={path == "/" ? "font-sans text-[12px] font-semibold text-[#c2f800] tab tab-active rounded-full text-sm bg-[#1a2312] shadow-md px-4 py-1.5" : "tab rounded-full text-sm font-sans text-[12px] font-medium text-[#9ca3af] hover:text-white px-4 py-1.5"}
                            >
                                Workouts
                            </Link>

                            <Link
                                href="/list"
                                role="tab"
                                className={path == "/list" ? "font-sans text-[12px] font-semibold text-[#c2f800] tab tab-active rounded-full text-sm bg-[#1a2312] shadow-md px-4 py-1.5" 
                                    :
                                   "tab rounded-full text-sm font-sans text-[12px] font-medium text-[#9ca3af] hover:text-white px-4 py-1.5"}
                            >
                                My Plan
                            </Link>
                        </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-5 text-sm font-medium">
                        <Link href="/list" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <span className="text-[#d1d5db] font-sans text-[12px] font-medium">Plan</span>
                            <span className="badge border-none bg-[#c2f800] font-bold text-black px-2.5 py-3 rounded-full">
                                {context ? context.planList.length : "0"}
                            </span>
                        </Link>

                        <Link href="/list" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <span className="text-[#9ca3af] font-sans text-[12px] font-medium">Saved</span>
                            <span className="badge badge-outline border-[#2d313b] text-[#d1d5db] px-2.5 py-3 rounded-full font-['Inter'] text-[11px] font-medium">
                                {context ? context.savedList.length : "0"}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;