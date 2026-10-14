import React from 'react';
import { Ipost } from './Ipost';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFire, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Postcard = ({ post }: { post: Ipost }) => {
    return (
        <Link href={`/${post.id}`} className="block w-full">
            <div className="w-full bg-[#1e232a] text-white rounded-2xl overflow-hidden shadow-xl border border-gray-800 font-sans transition-transform duration-200 hover:-translate-y-1">
                <div className="relative w-full h-44 sm:h-48 overflow-hidden rounded-t-2xl">
                    <Image
                        src={post.image}
                        alt={post.name}
                        width={350} 
                        height={200}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="p-4 space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {post.muscleGroups?.map((muscle, index) => (
                            <span
                                key={index}
                                className="bg-[#c2f800] text-black text-[11px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div>
                        <h2 className="font-['Oswald'] text-[18px] font-bold uppercase tracking-wide leading-tight text-white">
                            {post.name}
                        </h2>
                        <p className="text-[#9ca3af] font-sans text-[12px] font-normal mt-1 capitalize">
                            {post.equipment}
                        </p>
                    </div>

                    <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-[#9ca3af] font-sans text-[12px] font-normal">
                        <div className="flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faClock} className="w-4 h-4 shrink-0" />
                            <span>{post.duration} min</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faFire} className="w-4 h-4 shrink-0" />
                            <span>{post.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 shrink-0" />
                            <span>{post.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Postcard;