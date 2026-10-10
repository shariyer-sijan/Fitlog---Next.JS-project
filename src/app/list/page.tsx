"use client";
import React, { useState } from 'react';
import { useContext } from 'react';
import { Workout } from '@/context/Context';
import Postcard from '@/components/Postcard';
import Link from 'next/link';
import Plancard from '@/components/Plancard';
import Savedcard from '@/components/Savedcard';
import { Ipost } from '@/components/Ipost';

const Page = () => {
    const context = useContext(Workout);

    const [Flag, setFlag] = useState(1); //1 mane plan , 0 mane save
    const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');

    if (!context) {
        return (
            <div className="min-h-screen bg-[#0a0c0e] text-white flex items-center justify-center">
                <p className="text-gray-400">Loading plan...</p>
            </div>
        );
    }

    const { planList, setPlanList, setSavedList, savedList } = context;

    const totalmin = planList.reduce((total, item) => total + item.duration, 0);
    const totalcal = planList.reduce((total, item) => total + item.caloriesBurned, 0);

    const totmin = savedList.reduce((total, item) => total + item.duration, 0);
    const totcal = savedList.reduce((total, item) => total + item.caloriesBurned, 0);


    const handleSortChange = (newSortBy: 'duration' | 'calories' | 'rating') => {
        setSortBy(newSortBy);

        // Current list clone
        const currentList = Flag ? [...planList] : [...savedList];

        // Array sort
        currentList.sort((a, b) => {
            if (newSortBy === 'duration') return b.duration - a.duration;
            if (newSortBy === 'calories') return b.caloriesBurned - a.caloriesBurned;
            if (newSortBy === 'rating') return b.rating - a.rating;
            return 0;
        });

        // Direct Context State Update
        if (Flag) {
            setPlanList(currentList);
        } else {
            setSavedList(currentList);
        }
    };


    return (
        <div className="container mx-auto">
            <div className="mb-6">
                <span className="uppercase tracking-wider font-['Oswald'] text-[30px] font-bold text-white">
                    MY PLAN
                </span>
                <p className="mt-1 text-[#8a92a0] font-sans text-[14px] font-normal">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            <div className="bg-[#12161c] border border-gray-800/80 rounded-2xl p-5 mb-8 grid grid-cols-3 divide-x divide-gray-800/80">
                <div className="px-4">
                    <span className=" block mb-1 text-[#8a92a0] font-sans text-[12px] font-normal">Exercises</span>
                    <span className="font-['Oswald'] text-[36px] font-bold text-[#ccff00]">{Flag ? planList.length : savedList.length}</span>
                </div>
                <div className="px-6">
                    <span className="text-[#8a92a0] font-sans text-[12px] font-normal block mb-1">Minutes</span>
                    <span className="font-['Oswald'] text-[36px] font-bold text-white">{Flag ? totalmin : totmin}</span>
                </div>
                <div className="px-6">
                    <span className="text-[#8a92a0] font-sans text-[12px] font-normal block mb-1">Calories</span>
                    <span className="font-['Oswald'] text-[36px] font-bold text-white">{Flag ? totalcal : totcal}</span>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">

                <div className="bg-[#12161c] p-1 rounded-xl border border-gray-800/80 inline-flex gap-1">
                    <button
                        onClick={() => setFlag(1)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition ${Flag ? "bg-[#1e232a] text-white font-sans text-[12px] font-bold shadow" :
                            'text-gray-400 hover:text-white'}`}
                    >
                        Todays Plan
                    </button>
                    <button
                        onClick={() => setFlag(0)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition ${!Flag
                            ? "font-sans text-[12px] font-bold bg-[#1e232a] text-white shadow"
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        Saved
                    </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#8a92a0]  font-sans text-[12px] font-normal">
                    <span>Sort By</span>
                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => handleSortChange(e.target.value as 'duration' | 'calories' | 'rating')}
                            className="bg-[#12161c] border border-gray-800 text-white font-semibold px-4 py-2 pr-8 rounded-lg focus:outline-none focus:border-lime-400 appearance-none cursor-pointer text-xs"
                        >
                            <option value="duration" className="bg-[#12161c] text-white font-sans text-[12px] font-normal">Duration</option>
                            <option value="calories" className="bg-[#12161c] text-white font-sans text-[12px] font-normal">Calories</option>
                            <option value="rating" className="bg-[#12161c] text-white font-sans text-[12px] font-normal">Rating</option>
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                            <i className="fa-solid fa-caret-down text-xs"></i>
                        </div>
                    </div>
                </div>
            </div>

            {Flag ? (
                planList.length === 0 ? (
                    <div className="border-2 border-dashed border-gray-800/80 rounded-2xl py-20 px-4 text-center bg-[#0d0f12]">
                        <h2 className="uppercase text-white tracking-wider mb-2 font-['Oswald'] text-[20px] font-bold">
                            NOTHING HERE YET
                        </h2>
                        <p className="font-sans text-[12px] font-normal text-[#a1a1aa] mb-6 ">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-[#ccff00] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-full hover:bg-[#bce600] transition"
                        >
                            Go to workouts
                        </Link>
                    </div>) : (<div >
                        {planList.map((item) => (<Plancard key={item.id} post={item} />))}
                    </div>
                )) : (

                savedList.length === 0 ? (
                    <div className="border-2 border-dashed border-gray-800/80 rounded-2xl py-20 px-4 text-center bg-[#0d0f12]">
                        <h2 className="uppercase text-white tracking-wider mb-2 font-['Oswald'] text-[20px] font-bold">
                            NOTHING HERE YET
                        </h2>
                        <p className="font-sans text-[12px] font-normal text-[#a1a1aa] mb-6 ">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-[#ccff00] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-full hover:bg-[#bce600] transition"
                        >
                            Go to workouts
                        </Link>
                    </div>) : (<div >
                        {savedList.map((item) => (
                            <Savedcard key={item.id} post={item} />
                        ))
                        }
                    </div>
                )
            )
            }
        </div>
    );
};

export default Page;

