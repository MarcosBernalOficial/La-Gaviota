import React from "react";

const whatsappLink = "https://wa.me/542235506245?text=Hola!%20Quisiera%20consultar%20sobre%20esta%20sección%20que%20está%20próximamente%20disponible.";

export default function Proximamente() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-wood-brown text-soft-beige px-4 text-center">
        {/* Texto principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            ¡Próximamente!
        </h1>

        {/* Botón de WhatsApp */}
        <div className="animate-fadeIn">
            <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
            Consultar por este WhatsApp
            </a>
        </div>
        </div>
    );
}
