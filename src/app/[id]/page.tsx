import React from 'react';
import Image from 'next/image';
import { Ipost } from '@/components/Ipost';
import Plan from '@/components/Plan';
import Save from '@/components/Save';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
    const post: Ipost = await res.json();

    if (!post) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#0f1216] text-white px-4">
                <h1 className="text-xl font-bold text-center">Workout details not found!</h1>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 bg-[#0f1216] text-white min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                    {post.image ? (
                        <Image
                            src={post.image}
                            alt={post.name || "Workout Image"}
                            width={650} 
                            height={450}
                            className="object-cover w-full h-full"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400 p-4 text-center">
                            No Image Available
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    <div>
                        <h1 className="font-['Oswald'] text-2xl sm:text-3xl lg:text-[36px] font-bold uppercase tracking-wider text-white wrap-break-word">
                            {post.name}
                        </h1>
                        <p className="text-sm sm:text-base text-[#9ca3af] font-sans font-normal mt-2 leading-relaxed wrap-break-word">
                            {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {post.muscleGroups?.map((muscle, index) => (
                                <span
                                    key={index}
                                    className="bg-[#ccff00] text-[#0f1115] font-sans text-[11px] sm:text-[12px] font-semibold px-3 py-1 rounded-full uppercase"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#181c23] rounded-2xl p-4 sm:p-5 border border-gray-800/80 divide-y divide-gray-800/60 text-sm">
                        <div className="flex justify-between items-center py-2.5">
                            <span className="uppercase font-sans text-[11px] sm:text-[12px] font-bold text-[#9ca3af]">Equipment</span>
                            <span className="text-[#e5e7eb] uppercase font-sans text-[13px] sm:text-[14px] font-medium text-right">{post.equipment}</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5">
                            <span className="uppercase font-sans text-[11px] sm:text-[12px] font-bold text-[#9ca3af]">Difficulty</span>
                            <span className="text-[#e5e7eb] uppercase font-sans text-[13px] sm:text-[14px] font-medium text-right">{post.difficulty}</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5">
                            <span className="uppercase font-sans text-[11px] sm:text-[12px] font-bold text-[#9ca3af]">Sets</span>
                            <span className="text-[#e5e7eb] uppercase font-sans text-[13px] sm:text-[14px] font-medium text-right">{post.sets}</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5">
                            <span className="uppercase font-sans text-[11px] sm:text-[12px] font-bold text-[#9ca3af]">Reps</span>
                            <span className="text-[#e5e7eb] uppercase font-sans text-[13px] sm:text-[14px] font-medium text-right">{post.reps}</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5">
                            <span className="uppercase font-sans text-[11px] sm:text-[12px] font-bold text-[#9ca3af]">Duration</span>
                            <span className="text-[#e5e7eb] uppercase font-sans text-[13px] sm:text-[14px] font-medium text-right">{post.duration} min</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5">
                            <span className="uppercase font-sans text-[11px] sm:text-[12px] font-bold text-[#9ca3af]">Calories</span>
                            <span className="text-[#e5e7eb] uppercase font-sans text-[13px] sm:text-[14px] font-medium text-right">{post.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5">
                            <span className="uppercase font-sans text-[11px] sm:text-[12px] font-bold text-[#9ca3af]">Rating</span>
                            <span className="text-[#e5e7eb] uppercase font-sans text-[13px] sm:text-[14px] font-medium text-right">{post.rating}</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="uppercase tracking-wider text-white font-sans text-sm sm:text-[16px] font-extrabold">
                            Instructions
                        </h3>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-[#d1d5db] leading-relaxed font-sans font-normal">
                            {post.instructions?.map((step, index) => (
                                <li key={index} className="pl-1">
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                        <Plan post={post} />
                        <Save post={post} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;