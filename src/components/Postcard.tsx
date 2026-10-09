import React from 'react';
import { Ipost } from './Ipost';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFire, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Postcard = ({ post }: { post: Ipost }) => {
    return (
        <Link href={`/${post.id}`}>
        <div className="w-80 bg-[#1e232a] text-white rounded-2xl overflow-hidden shadow-xl border border-gray-800 font-sans mb-5 ml-15">
            <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                <Image
                    src={post.image}
                    alt={post.name}
                    width={350} height={100}
                    className="object-cover"
                />
            </div>

            <div className="p-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                    {post.muscleGroups?.map((muscle, index) => (
                        <span
                            key={index}
                            className="bg-[#cfff04] text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                <div>
                    <h2 className="text-xl font-black uppercase tracking-wide leading-tight text-white">
                        {post.name}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1 capitalize font-medium">
                        {post.equipment}
                    </p>
                </div>

                <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
              
                    <div className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-gray-400" />
                        <span>{post.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faFire} className="w-4 h-4 text-gray-400" />
                        <span>{post.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-gray-400" />
                        <span>{post.rating}</span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Postcard;