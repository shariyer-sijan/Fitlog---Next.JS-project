"use client";
import { Workout } from '@/context/Context';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Ipost } from './Ipost';


const Save = ( {post}:{post:Ipost}) => {
    const context= useContext(Workout) ;
    if(!context){
        return null ;
    }
    const {setSavedList}=context ;
    const handle=()=>{
        setSavedList( (prev)=>[...prev,post]) ;
    }
    return (
        <button onClick={handle} className="flex items-center gap-2 bg-[#181c23] border border-gray-700 text-gray-300 font-bold px-5 py-3 rounded-xl hover:bg-gray-800 transition">
            <FontAwesomeIcon icon={faBookmark} className="w-4 h-4" />
            <span>Save for later</span>
        </button>
    );
};

export default Save;