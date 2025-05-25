import CardLink from "../components/CardLink";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

import SplashScreen from "../components/SplashScreen";

const Home = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (showSplash) return <SplashScreen />;

    return (
        <div className="px-6 max-w-5xl mx-auto space-y-12">

            {/* Carrusel de eventos */}
            <div className="max-w-3xl mx-auto">
                <CardLink to="/eventos" title="Eventos" font="font-eventos">
                    <Carousel images={[eventoFD1, eventoID1, eventoIN1, eventoFD2, eventoID2, eventoIN2, eventoFD3, eventoID3, eventoIN3, eventoFD4, eventoID4, eventoIN4, eventoFD5, eventoID5, eventoIN5, eventoFD6, eventoID6, eventoIN6]} />
                </CardLink>
            </div>

            {/* Surf Club */}
            <div>
                <h2 className="text-center font-surfClub text-3xl text-wood-brown font-bold mb-6">
                    Surf Club
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-soft-beige p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardLink to="/proximamente" title="Clases de Surf" font="font-surfClub">
                        <Carousel images={[eventoFD1, eventoID1, eventoIN1]} />
                    </CardLink>
                    <CardLink to="/proximamente" title="U Natural" font="font-surfClub">
                        <Carousel images={[eventoFD4, eventoID4, eventoIN4]} />
                    </CardLink>
                </div>
            </div>

            
        </div>
    );
};

export default Home;
