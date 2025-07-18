import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUtensils,
    faUmbrellaBeach,
    faDog,
    faWheelchair,
} from '@fortawesome/free-solid-svg-icons';

import SplashScreen from "../components/SplashScreen";
import Carousel from '../components/CarouselCard';
import VideoSection from '../components/VideoSection';
import VideoOverlayCard from '../components/VideoOverlayCard';

import video1 from '../assets/videos/Nosotros.mp4';
import video2 from '../assets/videos/petFriendly.mp4';
import video3 from '../assets/videos/Terraza.mp4';
import video4 from '../assets/videos/Ustedes.mp4';

export default function Home() {
    const [splashFinished, setSplashFinished] = useState(false);

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    return (
        <div className="w-full">
            {!splashFinished && <SplashScreen onFinish={() => setSplashFinished(true)} />}

            {splashFinished && (
                <>
                    <Carousel />

                    {/* Íconos con scroll */}
                    <div className="w-full px-4 py-6 flex justify-center">
                        <div className="w-full max-w-xl flex justify-evenly text-wood-brown text-3xl">
                            <div className="flex flex-col items-center cursor-pointer" onClick={() => handleScrollTo("video1")}>
                                <FontAwesomeIcon icon={faUtensils} />
                                <p className="text-sm mt-1">Especialidad</p>
                            </div>
                            <div className="flex flex-col items-center cursor-pointer" onClick={() => handleScrollTo("video2")}>
                                <FontAwesomeIcon icon={faDog} />
                                <p className="text-sm mt-1">Pet Friendly</p>
                            </div>
                            <div className="flex flex-col items-center cursor-pointer" onClick={() => handleScrollTo("video3")}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} />
                                <p className="text-sm mt-1">Terrazas</p>
                            </div>
                            <div className="flex flex-col items-center cursor-pointer" onClick={() => handleScrollTo("video4")}>
                                <FontAwesomeIcon icon={faWheelchair} />
                                <p className="text-sm mt-1">Acceso</p>
                            </div>
                        </div>
                    </div>

                    {/* Videos con overlays */}
                    <div id="video1">
                        <VideoSection videoSrc={video1} fullScreen={false}>
                            <VideoOverlayCard
                                subtitle="Marisquería"
                                description="Nos especializamos en mariscos frescos, seleccionados con dedicación y preparados con amor que resalta su sabor natural. Cada plato refleja nuestro compromiso con la cocina de mar."
                            />
                        </VideoSection>
                    </div>
                    <div id="video2">
                        <VideoSection videoSrc={video2} fullScreen={false}>
                            <VideoOverlayCard
                                subtitle="Pet Friendly"
                                description="Las mascotas también son parte de la familia. Por eso, somos un espacio pet friendly. Podés disfrutar de una comida o una tarde especial acompañado de tu mejor amigo de cuatro patas."
                            />
                        </VideoSection>
                    </div>
                    <div id="video3">
                        <VideoSection videoSrc={video3} fullScreen={false}>
                            <VideoOverlayCard
                                subtitle="Frente al mar"
                                description="Nuestras terrazas con vista al mar son el escenario perfecto para disfrutar de una excelente gastronomía en la mejor compañía. Un entorno único donde cada momento se convierte en un recuerdo inolvidable."
                            />
                        </VideoSection>
                    </div>
                    <div id="video4">
                        <VideoSection videoSrc={video4} fullScreen={false}>
                            <VideoOverlayCard
                                subtitle="Espacio Accesible"
                                description="Nuestro salón ofrece un ambiente cálido y accesible. Contamos con instalaciones preparadas para recibir a todas las personas, incluyendo aquellas con discapacidad. La comodidad y la inclusión son parte de nuestra propuesta."
                            />
                        </VideoSection>
                    </div>
                </>
            )}
        </div>
    );
}
