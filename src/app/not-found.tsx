import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faHome } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#0f1216] text-white">
            <div className="max-w-md w-full bg-[#12161f] border border-gray-800/80 rounded-2xl p-8 text-center shadow-2xl space-y-6">
                <div className="w-16 h-16 bg-[#ccff00]/10 text-[#ccff00] rounded-full flex items-center justify-center mx-auto text-2xl">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                    <h1 className="font-['Oswald'] text-4xl sm:text-5xl font-bold tracking-wider uppercase text-white">
                        404
                    </h1>
                    <h2 className="font-['Oswald'] text-xl font-semibold tracking-wide text-gray-300 uppercase">
                        Page Not Found
                    </h2>
                    <p className="font-sans text-sm text-[#9ca3af] leading-relaxed">
                        Oops! The workout or page you are looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                <div>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-[#ccff00] hover:bg-[#bce600] text-[#0f1115] font-sans text-sm font-semibold px-6 py-3 rounded-xl transition w-full"
                    >
                        <FontAwesomeIcon icon={faHome} className="w-4 h-4 shrink-0" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;