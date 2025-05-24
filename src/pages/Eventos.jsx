import React, { useState } from "react";
import Carousel from "../components/Carousel";

// FORMAL - DÍA
import eventoFD1 from "../assets/images/evento-formal-1-dia.jpg";
import eventoFD2 from "../assets/images/evento-formal-2-dia.jpg";
import eventoFD3 from "../assets/images/evento-formal-3dia.jpg"; // nombre original tiene mal puesto el guión
import eventoFD4 from "../assets/images/evento-formal-4-dia.jpg";
import eventoFD5 from "../assets/images/evento-formal-5-dia.jpg";
import eventoFD6 from "../assets/images/evento-formal-6-dia.jpg";

// INFORMAL - DÍA
import eventoID1 from "../assets/images/evento-informal-1-dia.jpg";
import eventoID2 from "../assets/images/evento-informal-2-dia.jpg";
import eventoID3 from "../assets/images/evento-informal-3-dia.jpg";
import eventoID4 from "../assets/images/evento-informal-4-dia.jpg";
import eventoID5 from "../assets/images/evento-informal-5-dia.jpg";
import eventoID6 from "../assets/images/evento-informal-6-dia.jpg";

// INFORMAL - NOCHE
import eventoIN1 from "../assets/images/evento-informal-1-noche.jpg";
import eventoIN2 from "../assets/images/evento-informal-2-noche.jpg";
import eventoIN3 from "../assets/images/evento-informal-3-noche.jpg";
import eventoIN4 from "../assets/images/evento-informal-4-noche.jpg";
import eventoIN5 from "../assets/images/evento-informal-5-noche.jpg";
import eventoIN6 from "../assets/images/evento-informal-6-noche.jpg";

const whatsappLink = "https://wa.me/542235506245?text=Hola!%20Quisiera%20reservar%20el%20salón%20de%20La%20Gaviota.";

const Eventos = () => {
    const [formalTime, setFormalTime] = useState("day");
    const [informalTime, setInformalTime] = useState("day");
    const [lightboxContent, setLightboxContent] = useState(null);

    const formalImages = formalTime === "day" ? [eventoFD1, eventoFD2, eventoFD3, eventoFD4, eventoFD5, eventoFD6] : [eventoFD1, eventoFD2, eventoFD3, eventoFD4, eventoFD5, eventoFD6];
    const informalImages = informalTime === "day" ? [eventoID1, eventoID2, eventoID3, eventoID4, eventoID5, eventoID6] : [eventoIN1, eventoIN2, eventoIN3, eventoIN4, eventoIN5, eventoIN6];
    const collageImages = [eventoFD1, eventoIN3, eventoIN5, eventoFD3];

    return (
        <div className="bg-soft-cream min-h-screen px-4 pb-12 pt-6 md:px-10 max-w-7xl mx-auto relative">
            {/* Lightbox */}
            {lightboxContent && (
                <div className="fixed inset-0 bg-wood-brown/80 flex justify-center items-center z-50">
                    <button
                        onClick={() => setLightboxContent(null)}
                        className="absolute top-4 right-4 bg-wood-brown/60 text-soft-beige p-2 rounded-full shadow hover:scale-110 transition"
                    >
                        ✕
                    </button>
                    <div className="max-w-3xl w-full px-4">
                        <div className="rounded-xl overflow-hidden">
                            {lightboxContent}
                        </div>
                    </div>
                </div>
            )}

            {/* Bienvenida */}
            <div className="text-center mb-12 animate-fadeIn">
                <h1 className="text-4xl font-bold font-eventos text-wood-brown mb-4">
                    La Gaviota Eventos
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Descubrí cómo transformamos cada momento en un recuerdo inolvidable, desde encuentros íntimos hasta celebraciones vibrantes frente al mar.
                </p>
            </div>

            {/* Collage de fotos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {collageImages.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Evento ${i + 1}`}
                        onClick={() =>
                            setLightboxContent(
                                <img
                                    src={img}
                                    alt={`Evento ${i + 1}`}
                                    className="w-full h-[70vh] object-cover rounded-xl"
                                />
                            )
                        }
                        className="rounded-xl object-cover w-full h-72 md:h-96 cursor-pointer hover:scale-105 transition"
                    />
                ))}
            </div>

            {/* Eventos Formales */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold font-eventos text-center text-wood-brown mb-6">
                    Eventos Formales
                </h2>
                <div
                    className="cursor-pointer"
                    onClick={() =>
                        setLightboxContent(
                            <div className="h-[70vh]">
                                <Carousel images={formalImages} />
                            </div>
                        )
                    }
                >
                    <Carousel images={formalImages} />
                </div>
                <p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
                    Nuestros eventos formales son ideales para bodas, aniversarios y celebraciones especiales. Capacidad: hasta 150 personas.
                </p>
                <div className="flex justify-center mt-4 gap-4">
                    <button
                        onClick={() => setFormalTime("day")}
                        className={`px-4 py-2 rounded-full ${formalTime === "day"
                            ? "bg-wood-brown text-soft-beige"
                            : "bg-soft-beige text-wood-brown border"
                            }`}
                    >
                        Ver Día
                    </button>
                    <button
                        onClick={() => setFormalTime("night")}
                        className={`px-4 py-2 rounded-full ${formalTime === "night"
                            ? "bg-wood-brown text-soft-beige"
                            : "bg-soft-beige text-wood-brown border"
                            }`}
                    >
                        Ver Noche
                    </button>
                </div>
            </section>

            {/* Eventos Informales */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold font-eventos text-center text-wood-brown mb-6">
                    Eventos Informales
                </h2>
                <div
                    className="cursor-pointer"
                    onClick={() =>
                        setLightboxContent(
                            <div className="h-[70vh]">
                                <Carousel images={informalImages} />
                            </div>
                        )
                    }
                >
                    <Carousel images={informalImages} />
                </div>
                <p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
                    Perfectos para cumpleaños, after office y reuniones con amigos. Capacidad: hasta 200 personas.
                </p>
                <div className="flex justify-center mt-4 gap-4">
                    <button
                        onClick={() => setInformalTime("day")}
                        className={`px-4 py-2 rounded-full ${informalTime === "day"
                            ? "bg-wood-brown text-soft-beige"
                            : "bg-soft-beige text-wood-brown border"
                            }`}
                    >
                        Ver Día
                    </button>
                    <button
                        onClick={() => setInformalTime("night")}
                        className={`px-4 py-2 rounded-full ${informalTime === "night"
                            ? "bg-wood-brown text-soft-beige"
                            : "bg-soft-beige text-wood-brown border"
                            }`}
                    >
                        Ver Noche
                    </button>
                </div>
            </section>

            {/* Botón de reserva */}
            <div className="text-center">
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all"
                >
                    Reservar salón vía WhatsApp
                </a>
            </div>
        </div>
    );
};

export default Eventos;
