import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import banner from "@/assets/banner.png"
const Banner = () => {
    return (
        <div className="container mx-auto px-4 py-8">
      <div className="bg-[#12141a] rounded-2xl p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="max-w-xl space-y-6">
          <span className="font-sans text-[11px] font-bold  text-[#c2f800] tracking-wider text-xs uppercase">
            Workout Library
          </span>

          <h1 className="font-['Oswald'] text-[60px] font-bold text-white tracking-tight uppercase leading-tight">
            Train with intent. Log every set.
          </h1>

          <p className="font-sans text-[16px] font-normal text-[#9ca3af]  md:text-base leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div>
            <Link href="#workout-list"
              className="inline-block bg-[#c2f800] text-black text-[12px] font-bold px-6 py-3 rounded-full hover:bg-[#b8e600] transition-colors text-sm"
            >
              Browse Workouts
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-md h-75 md:h-95 flex justify-center items-center">
          <Image src={banner} alt="Gym"/>
        </div>

      </div>
    </div>
    );
};

export default Banner;