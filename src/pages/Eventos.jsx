import React, { useState } from "react";
import Carousel from "../components/Carousel";
import VideoCarousel from "../components/VideoCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// FORMAL - DÍA
import eventoFD1 from "../assets/images/evento-formal-1-dia.jpg";
import eventoFD2 from "../assets/images/evento-formal-2-dia.jpg";
import eventoFD3 from "../assets/images/evento-formal-3dia.jpg";
import eventoFD4 from "../assets/images/evento-formal-4-dia.jpg";
import eventoFD5 from "../assets/images/evento-formal-5-dia.jpg";

// INFORMAL - DÍA
import eventoID1 from "../assets/images/evento-informal-1-dia.jpg";
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

// VIDEOS - EVENTOS 
import video2 from '../assets/videos/video evento de noche.mp4';


const whatsappLink = "https://wa.me/542235506245?text=Hola!%20Quisiera%20reservar%20el%20salón%20de%20La%20Gaviota.";

const Eventos = () => {
    const [informalTime, setInformalTime] = useState("day");
    const [lightboxContent, setLightboxContent] = useState(null);

    const formalImages = [eventoFD1, eventoFD2, eventoFD3, eventoFD4, eventoFD5];
    const informalImages = informalTime === "day"
        ? [eventoID1, eventoID3, eventoID4, eventoID5, eventoID6]
        : [eventoIN1, eventoIN2, eventoIN3, eventoIN4, eventoIN5, eventoIN6];
    const collageImages = [eventoFD1, eventoIN3, eventoIN5, eventoFD3];
    const videos = [video2];


    return (
        <div className="bg-soft-cream min-h-screen pb-12 pt-0 md:px-10 max-w-7xl mx-auto relative">
            {/* Carrusel de Videos */}
            <div className="my-12">
                <VideoCarousel videos={videos} />
            </div>

            {/* Bienvenida */}
            <div className="text-center mb-12 animate-fadeIn">
                <h1 className="text-4xl font-bold font-eventos text-wood-brown mb-4">
                    La Gaviota Eventos
                </h1>
                <p className="mx-auto px-8 text-center text-lg text-gray-700 max-w-2xl">
                    Descubrí cómo transformamos cada momento en un recuerdo inolvidable, desde encuentros íntimos hasta celebraciones vibrantes frente al mar.
                </p>
            </div>
            {/* Eventos Formales */}
            <section className="m-8 animate-fadeIn">
                <h2 className="text-3xl font-bold font-eventos text-center text-wood-brown mb-6">
                    Eventos Formales
                </h2>
                <div
                    className="cursor-pointer max-w-2xl mx-auto overflow-hidden"
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
            </section>

            {/* Eventos Informales */}
            <section className="m-8 animate-fadeIn">
                <h2 className="text-3xl font-bold font-eventos text-center text-wood-brown mb-6">
                    Eventos Informales
                </h2>
                <div
                    className="cursor-pointer max-w-2xl mx-auto overflow-hidden"
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
                    {["day", "night"].map((time) => (
                        <button
                            key={time}
                            onClick={() => setInformalTime(time)}
                            className={`px-5 py-2 rounded-full font-semibold transform transition-all duration-300 ${
                                informalTime === time
                                    ? "bg-wood-brown text-soft-beige scale-105 shadow-md"
                                    : "bg-soft-beige text-wood-brown border hover:scale-105 hover:shadow"
                            }`}
                        >
                            Ver de {time === "day" ? "Día" : "Noche"}
                        </button>
                    ))}
                </div>
            </section>

            {/* Botón de reserva */}
            <div className="text-center animate-fadeIn">
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105"
                >
                    Reservar salón vía WhatsApp
                </a>
            </div>
        </div>
    );
};

export default Eventos;
