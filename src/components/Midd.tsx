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
        <div id="#workout-list" className='grid grid-cols-3 container mx-auto'>
            {
                posts.map((post)=>(
                     <Postcard key={post.id} post={post}/>
                ))
            }
        </div>
    );
};

export default Midd;