"use client";
import { Ipost } from '@/components/Ipost';
import React, { createContext, useState } from 'react';

interface iContext {
    savedList: Ipost[];
    planList: Ipost[];
    setSavedList: React.Dispatch<React.SetStateAction<Ipost[]>>;
    setPlanList: React.Dispatch<React.SetStateAction<Ipost[]>>;
}

export const Workout = createContext<iContext | undefined>(undefined);

const Context = ({ children }: { children: React.ReactNode }) => {

    const [savedList, setSavedList] = useState<Ipost[]>([]);
    const [planList, setPlanList] = useState<Ipost[]>([]);
    return (
        <Workout.Provider value={
            {
                savedList,
                planList,
                setSavedList,
                setPlanList
            }
        }>
            {children}
        </Workout.Provider>
    );
};

export default Context;