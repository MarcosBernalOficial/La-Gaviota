// src/components/Gallery.jsx
import React from 'react';

// ✅ Importación directa de las imágenes
import img1 from "../assets/images/evento-formal-2-dia.jpg";
import img2 from "../assets/images/evento-formal-2-dia.jpg";
import img3 from "../assets/images/evento-formal-2-dia.jpg";
import img4 from "../assets/images/evento-formal-2-dia.jpg";

// Array de imágenes
const images = [img1, img2, img3, img4];

export default function Gallery() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((src, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden rounded shadow-md">
                <img 
                    src={src} 
                    alt={`Gaviota ${index + 1}`} 
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded transition duration-300 hover:scale-105" 
                />
                </div>
            ))}
            </div>
        </div>
    );
}
