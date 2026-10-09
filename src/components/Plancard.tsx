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
    const { setPlanList, planList } = res;
    const handle = () => {

        const data = planList.filter((item) => item.id != post.id);
        setPlanList(data);
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
                    <h3 className="text-lg font-black text-white uppercase tracking-wide truncate">
                        {post.name}
                    </h3>

                    <p className="text-xs text-gray-400 font-medium truncate">
                        {post.equipment}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-300 mt-1">
                        <span className="flex items-center gap-1.5 text-[#cfff04]">
                            <i className="fa-solid fa-clock"></i>
                            <span className="text-gray-300">{post.duration} min</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-[#cfff04]">
                            <i className="fa-solid fa-fire"></i>
                            <span className="text-gray-300">{post.caloriesBurned} kcal</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-[#cfff04]">
                            <i className="fa-solid fa-star"></i>
                            <span className="text-gray-300">{post.rating}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">

                <Link
                    href={`/${post.id}`}
                    className="btn btn-outline btn-sm rounded-full text-xs font-bold text-white normal-case border-gray-700 hover:border-gray-500 hover:bg-transparent"
                >
                    View Details
                </Link>

                <button
                    onClick={handle}
                    className="btn btn-sm rounded-full bg-[#cfff04] hover:bg-[#bce600] text-black border-none text-xs font-extrabold normal-case gap-1.5"
                >
                    <i className="fa-solid fa-check text-sm"></i>
                    Mark as Done
                </button>

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