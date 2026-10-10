import React from 'react';
import Postcard from './Postcard';
import { Ipost } from './Ipost';


async function call():Promise<Ipost[]>{
    const data=await fetch('https://api.abcz.workers.dev/api/fitlog') ;
    return data.json() ;
}


const Midd = async () => {
    const posts=await call() ;
    return (
        <div>
            <div className="container mx-auto p-12"><h1 className="font-['Oswald'] text-[30px] font-bold text-white">THE LIBRARY</h1>
            <h1 className="font-sans text-[11px] font-normal text-[#9ca3af]">Twelve lifts covering every major muscle group.</h1></div>
            <div id="#workout-list" className='grid grid-cols-3 container mx-auto'>
            {
                posts.map((post)=>(
                     <Postcard key={post.id} post={post}/>
                ))
            }
        </div>
        </div>
    );
};

export default Midd;