// src/components/VideoSection.jsx
import React, { useRef, useEffect } from 'react';
import VideoOverlayCard from './VideoOverlayCard';

export default function VideoSection({ videoSrc, showButton, fullScreen = false, children }) {
    const videoRef = useRef(null);
    
    const containerClasses = fullScreen
        ? "relative h-screen w-full overflow-hidden group"
        : "relative w-full overflow-hidden group";

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const attemptPlay = () => {
                video.play().catch(error => {
                    console.log('Autoplay blocked:', error);
                });
            };

            // Intentar reproducir inmediatamente
            attemptPlay();

            // También intentar cuando esté listo
            video.addEventListener('loadeddata', attemptPlay);
            video.addEventListener('canplay', attemptPlay);

            return () => {
                video.removeEventListener('loadeddata', attemptPlay);
                video.removeEventListener('canplay', attemptPlay);
            };
        }
    }, [videoSrc]);

    const handleVideoClick = (e) => {
        const video = e.target;
        if (video.paused) {
            video.play();
        }
    };

    return (
        <section className={containerClasses}>
            <video
                ref={videoRef}
                className="w-full max-w-xl h-auto mx-auto object-contain block"
                src={videoSrc}
                preload="auto"
                autoPlay
                loop
                muted
                playsInline
                onClick={handleVideoClick}
            />
            {children}
        </section>
    );
}
