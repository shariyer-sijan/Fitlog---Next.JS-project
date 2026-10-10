"use client";
import { Workout } from '@/context/Context';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Ipost } from './Ipost';


const Save = ({ post }: { post: Ipost }) => {
    const context = useContext(Workout);
    if (!context) {
        return null;
    }
    const { savedList, setSavedList } = context;
    const ache = savedList.some((item) => item.id === post.id);
    const handle = () => {
        if (!ache) {
            setSavedList((prev) => [...prev, post]);
        }
    }
    return (
        <button onClick={handle} disabled={ache} className={ache
            ? "flex items-center gap-2 bg-gray-500 text-white font-bold px-5 py-3 rounded-xl cursor-not-allowed" : "flex items-center gap-2 bg-[#181c23] border border-gray-700 text-[#e5e7eb] font-sans text-[14px] font-medium px-5 py-3 rounded-xl hover:bg-gray-800 transition"}>
            <FontAwesomeIcon icon={faBookmark} className="w-4 h-4" />
            <span>{ache ? "Saved" : "Save for later"}</span>
        </button>
    );
};

export default Save;