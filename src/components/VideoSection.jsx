import React from 'react';

export default function VideoSection({ videoSrc, showButton, fullScreen = false }) {
  // Si fullScreen es true se usa h-screen, sino se ajusta al contenido con max-w-3xl
    const containerClasses = fullScreen
        ? "relative h-screen w-full overflow-hidden"
        : "relative w-full overflow-hidden";

    return (
        <section className={containerClasses}>
        <video
            className="w-full max-w-xl h-auto mx-auto object-contain block" // 👈 agregado block
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
        />
        </section>
    );
}

