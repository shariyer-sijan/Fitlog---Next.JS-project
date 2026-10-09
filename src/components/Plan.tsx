import { Workout } from '@/context/Context';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Ipost } from './Ipost';

const Plan = ({post}:{post:Ipost}) => {
    const context = useContext(Workout);
    if (!context) return null;
    const { setPlanList } = context;

    const handle=() =>{
        setPlanList( (prev)=>[...prev,post])
    }

    return (
        <button onClick={handle} className="flex items-center gap-2 bg-[#cfff04] text-black font-bold px-5 py-3 rounded-xl hover:bg-[#bce600] transition">
            <FontAwesomeIcon icon={faPlusSquare} className="w-4 h-4" />
            <span>Add to todays plan</span>
        </button>
    );
};

export default Plan;