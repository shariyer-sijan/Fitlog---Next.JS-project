import React from 'react';
import Postcard from './Postcard';
import { Ipost } from './Ipost';

async function call(): Promise<Ipost[]> {
    const data = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return data.json();
}

const Midd = async () => {
    const posts = await call();
    return (
        <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center sm:text-left">
                <h1 className="font-['Oswald'] text-2xl sm:text-[30px] font-bold text-white uppercase tracking-wide">
                    THE LIBRARY
                </h1>
                <h1 className="font-sans text-[11px] sm:text-xs font-normal text-[#9ca3af] mt-1">
                    Twelve lifts covering every major muscle group.
                </h1>
            </div>
            <div id="workout-list" className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                {posts.map((post) => (
                    <Postcard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Midd;