// src/components/VideoSection.jsx
import React from 'react';
import VideoOverlayCard from './VideoOverlayCard';

export default function VideoSection({ videoSrc, showButton, fullScreen = false, children }) {
    const containerClasses = fullScreen
        ? "relative h-screen w-full overflow-hidden group"
        : "relative w-full overflow-hidden group";

    return (
        <section className={containerClasses}>
        <video
            className="w-full max-w-xl h-auto mx-auto object-contain block"
            src={videoSrc}
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{ pointerEvents: 'none' }}
        />
        {children}
        </section>
    );
}

