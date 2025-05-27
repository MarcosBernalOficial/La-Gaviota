// src/components/CarouselCard.jsx
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imágenes importadas
import eventosBg from "../assets/images/evento-formal-2-dia.jpg";
import surfclubBg from "../assets/images/Surfclub.jpg";
import unaturalBg from "../assets/images/Unatural.jpg";
import SobreNosotros from "../assets/images/SobreNosotros.png";

// Datos de las tarjetas
const cardLinks = [
    { title: "Eventos", link: "/eventos", image: eventosBg },
    { title: "Surfclub", link: "/surfclub", image: surfclubBg },
    { title: "UNatural", link: "/surfclub", image: unaturalBg },
];

export default function CarouselCard() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        arrows: false, // 👈 Desactiva las flechas
    };

    return (
        <div className="my-8 max-w-xl mx-auto">
            <Slider {...settings}>
                {cardLinks.map((card, index) => (
                    <div key={index} className="">
                        <Link to={card.link} className="block bg-soft-beige overflow-hidden shadow-md">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full object-cover"
                                style={{ maxHeight: "250px", height: "auto" }}
                            />
                            <div className="p-4 text-center font-bold text-wood-brown text-xl font-title">
                                {card.title}
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

