// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

import plato1 from '../assets/images/Unatural.jpg';
import plato2 from '../assets/images/SurfClub.jpg';
import equipo from '../assets/images/SobreNosotros.png';

const sections = [
    {
        title: "Nuestra historia",
        text: "La Gaviota nació junto al mar con el sueño de unir sabores, naturaleza y comunidad.",
        image: equipo,
    },
    {
        title: "Sabores del mar",
        text: "Cada plato está inspirado en la costa. Usamos productos frescos y de estación.",
        image: plato1,
    },
    {
        title: "Cocina con amor",
        text: "Nuestro equipo trabaja con pasión para crear experiencias únicas.",
        image: plato2,
    },
];

export default function About() {
    return (
        <div className="w-full flex flex-col items-center">
        {sections.map((section, i) => (
            <section
            key={i}
            className="min-h-screen w-full flex justify-center bg-soft-beige text-wood-brown dark:text-beige"
            >
            <div className="max-w-xl w-full flex flex-col justify-center items-center text-center px-6 py-12">
                
                {/* Imagen con espacio reservado */}
                <div className="w-full aspect-[16/9] overflow-hidden shadow-xl mb-6">
                <motion.img
                    src={section.image}
                    alt={section.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
                </div>

                {/* Título */}
                <motion.h2
                className="text-3xl font-brownSugar mb-4 tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                >
                {section.title}
                </motion.h2>

                {/* Texto */}
                <motion.p
                className="text-base font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                >
                {section.text}
                </motion.p>
            </div>
            </section>
        ))}
        </div>
    );
}
