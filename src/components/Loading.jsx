import React, { useMemo } from 'react';

const Loading = ({ text = 'LOADING', className = '' }) => {
    const letters = useMemo(() => text.split('').reverse(), [text]);

    return (
        <div
            className={`h-screen flex items-center justify-center bg-background relative w-full select-none cursor-default overflow-hidden ${className}`}
        >
            {letters.map((letter, index) => (
                <div
                    key={`${letter}-${index}`}
                    className="loading-letter absolute h-9 opacity-0 font-helvetica text-[oklch(0.62_0.19_254)] dark:text-[oklch(0.73_0.18_252)] text-3xl font-bold"
                    style={{
                        animationDelay: `${index * 0.2}s`,
                    }}
                >
                    {letter}
                </div>
            ))}

            <style jsx global>{`
                @keyframes moveLetters {
                    0% {
                        left: 0;
                        opacity: 0;
                        transform: rotate(180deg) translateZ(0);
                    }
                    35% {
                        left: 41%;
                        transform: rotate(0deg) translateZ(0);
                        opacity: 1;
                    }
                    65% {
                        left: 59%;
                        transform: rotate(0deg) translateZ(0);
                        opacity: 1;
                    }
                    100% {
                        left: 100%;
                        transform: rotate(-180deg) translateZ(0);
                        opacity: 0;
                    }
                }

                .loading-letter {
                    animation: moveLetters 3s linear infinite;
                    will-change: left, transform, opacity;
                    transform: translateZ(0);
                }
            `}</style>
        </div>
    );
};

export default Loading;
