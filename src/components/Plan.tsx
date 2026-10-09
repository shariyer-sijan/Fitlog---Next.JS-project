"use client";
import { Workout } from '@/context/Context';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Ipost } from './Ipost';

const Plan = ({post}:{post:Ipost}) => {
    const context = useContext(Workout);
    if (!context) return null;
    const { planList,setPlanList } = context;
    const ache =planList.some( (item)=> item.id===post.id)  ;
    const handle=() =>{
        if(!ache){
        setPlanList( (prev)=>[...prev,post]) ;
        }
    }
    
    return (
        <button onClick={handle} disabled={ache} className={
        ache
            ? "flex items-center gap-2 bg-gray-500 text-white font-bold px-5 py-3 rounded-xl cursor-not-allowed"
            : "flex items-center gap-2 bg-[#cfff04] text-black font-bold px-5 py-3 rounded-xl hover:bg-[#bce600] transition"
    }>
            <FontAwesomeIcon icon={faPlusSquare} className="w-4 h-4" />
            <span > {ache? "Added":"Add to todays plan"}</span>
        </button>
    );
};

export default Plan;