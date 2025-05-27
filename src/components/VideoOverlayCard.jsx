// src/components/VideoOverlayCard.jsx
import React from 'react';

export default function VideoOverlayCard({ subtitle, description }) {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-soft-beige/10 backdrop-blur-lg p-6 rounded-xl shadow-lg w-11/12 max-w-md text-center pointer-events-none transition-opacity duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100">
            <h3 className="text-5xl font-title text-soft-beige mb-2">{subtitle}</h3>
            <p className="text-md text-soft-beige">{description}</p>
        </div>
    );
}
