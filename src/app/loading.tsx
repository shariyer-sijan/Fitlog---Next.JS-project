import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] bg-[#0f1216] text-white">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-4 border-[#ccff00] border-t-transparent rounded-full animate-spin"></div>
                <p className="font-sans text-sm font-medium text-[#9ca3af] tracking-wide">
                    Loading workouts…
                </p>
            </div>
        </div>
    );
};

export default Loading;