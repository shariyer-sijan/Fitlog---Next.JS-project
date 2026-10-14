"use client";
import { Workout } from '@/context/Context';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Ipost } from './Ipost';
import { toast } from 'react-toastify'; 
const Plan = ({post}:{post:Ipost}) => {
    const context = useContext(Workout);
    if (!context) return null;
    const { planList, setPlanList } = context;
    const ache = planList.some((item) => item.id === post.id);
    const handle = () => {
        if (!ache) {
            setPlanList((prev) => [...prev, post]);
            toast.success(`${post.name} added to today's plan!`) ;
        }
    }
    
    return (
        <button onClick={handle} disabled={ache} className={
        ache
            ? "flex items-center justify-center gap-2 bg-gray-500 text-white font-bold px-5 py-3 rounded-xl cursor-not-allowed w-full sm:w-auto text-sm sm:text-[14px]"
            : "flex items-center justify-center gap-2 bg-[#ccff00] text-[#0f1115] font-sans text-sm sm:text-[14px] font-semibold px-5 py-3 rounded-xl hover:bg-[#bce600] transition w-full sm:w-auto"
    }>
            <FontAwesomeIcon icon={faPlusSquare} className="w-4 h-4 shrink-0" />
            <span>{ache ? "Added" : "Add to todays plan"}</span>
        </button>
    );
};

export default Plan;