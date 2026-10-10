"user client"
import React, { useContext } from 'react';
import { Ipost } from './Ipost';
import Link from 'next/link';
import Image from 'next/image';
import { Workout } from '@/context/Context';

const Plancard = ({ post }: { post: Ipost }) => {

    const res = useContext(Workout);
    if (!res) {
        return null;
    }
    const { setSavedList, savedList } = res;
    const handle = () => {

        const data = savedList.filter((item) => item.id != post.id);
        setSavedList(data);
    }

    return (
        <div className=" bg-[#12161f] border border-gray-800/80 rounded-2xl p-4 flex items-center justify-between gap-4 hover:border-gray-700/80 transition duration-200">

            <div className="flex items-center gap-4 min-w-0">
                <div className="relative w-28 h-20 shrink-0 rounded-xl overflow-hidden bg-base-300">
                    {post.image ? (
                        <Image
                            src={post.image}
                            alt={post.name || 'Workout Image'}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-500">
                            No Image
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="font-['Oswald'] text-[16px] font-bold text-white uppercase tracking-wide truncate">
                        {post.name}
                    </h3>

                    <p className="font-sans text-[12px] font-normal text-[#8a92a0] truncate">
                        {post.equipment}
                    </p>


                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-300 mt-1">
                        <span className="flex items-center gap-1.5 text-[#ccff00]">
                            <i className="fa-solid fa-clock"></i>
                            <span className="text-[#d1d5db] font-sans text-[12px] font-normal ">{post.duration} min</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-[#ccff00]">
                            <i className="fa-solid fa-fire"></i>
                            <span className="text-[#d1d5db] font-sans text-[12px] font-normal ">{post.caloriesBurned} kcal</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-[#ccff00]">
                            <i className="fa-solid fa-star"></i>
                            <span className="text-[#d1d5db] font-sans text-[12px] font-normal ">{post.rating}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">

                <Link
                    href={`/${post.id}`}
                    className="btn btn-outline btn-sm rounded-full font-sans text-[12px] font-normal text-white
                     normal-case border-gray-700 hover:border-gray-500 hover:bg-transparent"
                >
                    View Details
                </Link>
                <button
                    onClick={handle}
                    className="btn btn-ghost btn-sm btn-circle text-gray-400 hover:text-white hover:bg-gray-800/50"
                    title="Remove"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Plancard;