import React from "react";
import Carousel from "../components/Carousel";
import profeMaxi from "../assets/images/SurfClub/maxi-profe.jpg";
import profeJoaco from "../assets/images/SurfClub/joaco-profe.png";

import UN1 from "../assets/videos/u-natural.mp4"
import Video from "../components/Video"

import SC1 from "../assets/images/SurfClub/surfclub-1.png";
import SC2 from "../assets/images/SurfClub/surfclub-2.png";
import SC3 from "../assets/images/SurfClub/surfclub-3.png";
import SC4 from "../assets/images/SurfClub/surfclub-4.png";

const SurfClub = () => {
    const whatsappLink = (actividad) =>
        `https://wa.me/542235535852?text=Hola!%20Quisiera%20consultar%20sobre%20${encodeURIComponent(actividad)}.`;

    const imagesSurfClub = [SC1, SC2, SC3, SC4];

    return (
        <div className="bg-soft-cream min-h-screen px-4 pb-12 pt-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-surfClub text-soft-beige p-2 rounded-lg bg-wood-brown mb-12">
            Surf Club
        </h1>

        {/* Clases de Surf */}
        <section className="mb-20">
            <h2 className="text-3xl font-surfClub text-center text-wood-brown mb-6">
            Clases de Surf
            </h2>

            <div
                className="cursor-pointer max-w-2xl mx-auto overflow-hidden"
                onClick={() =>
                    setLightboxContent(
                        <div className="h-[70vh]">
                            <Carousel images={imagesSurfClub} />
                        </div>
                    )
                }
            >
                <Carousel images={imagesSurfClub} />
            </div>

            <div className="bg-soft-beige p-6 rounded-xl shadow-md mb-10">
            <h3 className="text-2xl font-surfClub text-center text-wood-brown mb-6">
                Tipos de Clase
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-soft-cream rounded-lg p-4 shadow-inner">
                <h4 className="text-xl font-bold text-wood-brown mb-2 text-center">Individuales</h4>
                <p className="text-gray-800 text-sm text-center">
                    Ideales para quienes recién comienzan o desean perfeccionar técnicas específicas.
                    La atención es personalizada y se adapta al ritmo del alumno.
                </p>
                </div>
                <div className="bg-soft-cream rounded-lg p-4 shadow-inner">
                <h4 className="text-xl font-bold text-wood-brown mb-2 text-center">Grupales</h4>
                <p className="text-gray-800 text-sm text-center">
                    Perfectas para disfrutar un momento de desconexion y compañía. Se trabaja en grupo con consignas dinámicas
                    que fomentan el espíritu de equipo y la diversión del surf.
                </p>
                </div>
            </div>
            </div>

            {/* Profesores */}
            <div className="bg-soft-beige p-6 rounded-xl shadow-md max-w-md mx-auto mb-6">
                <h3 className="text-xl font-bold text-wood-brown mb-4 text-center">Instructor</h3>
                <div className="flex items-center gap-4">
                <img
                    src={profeMaxi}
                    alt="Facilitador Joaquín"
                    className="w-20 h-20 rounded-full object-cover shadow"
                />
                <div>
                    <h4 className="font-semibold text-wood-brown">Maximo Bernal</h4>
                    <p className="text-sm text-wood-brown/80">
                    Instructor certificado de Surf +4 años de experiencia. <br /> Surfista desde los 5 años. <br />Dedicado al surf toda la vida.
                    </p>
                </div>
                </div>
            </div>
            <div className="mt-4 text-center">
                <a
                href={whatsappLink("U Natural")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded-full"
                >
                Inscripción por WhatsApp
                </a>
            </div>
        </section>

        {/* U Natural */}
        <section>
        <h2 className="text-3xl font-surfClub text-center text-wood-brown mb-6">
            U Natural
        </h2>

        <div
                className="cursor-pointer max-w-2xl mx-auto overflow-hidden"
                onClick={() =>
                    setLightboxContent(
                        <div className="h-[70vh]">
                            <Carousel images={imagesSurfClub} />
                        </div>
                    )
                }
            >
                <Video
                    videoSrc={UN1}
                />
        </div>

        <div className="bg-soft-beige p-6 rounded-xl shadow-md mb-10">
            <p className="text-wood-brown mb-4 font-general text-center">
            <b>UNATURAL</b> es un metodo de entrenamiento completo que te hara fusionar y mejorar tu fuerza, tu movibilidad, tu equilibrio y el control de tu cuerpo. <br /> El metodo es producto de una mezcla de diferentes disciplinas: JuiJitsu, Capoeira, Yoga y Surf
            </p>

            {/* Tabla de días y horarios */}
            <div className="grid grid-cols-3 gap-4 text-sm text-soft-beige p-4 bg-wood-brown rounded-lg my-4">
                <div className="pl-4 font-semibold text-start">Martes y Jueves </div>
                <div className="font-semibold text-center">AVANZADOS</div>
                <div className="pr-4 font-semibold text-end">19:00 - 20:00 hs</div>
                <div className="pl-4 font-semibold text-start">Martes y Jueves</div>
                <div className="font-semibold text-center">INICIANTES</div>
                <div className="pr-4 font-semibold text-end">20:00 - 21:00 hs</div>
            </div>

            <p className="mt-7 font-bold text-center text-wood-brown">Valor mensual: $40.000</p>
        </div>

        {/* Profesor U Natural */}
        <div className="bg-soft-beige p-6 rounded-xl shadow-md max-w-md mx-auto mb-6">
            <h3 className="text-xl font-bold text-wood-brown mb-4 text-center">Instructor</h3>
            <div className="flex items-center gap-4">
            <img
                src={profeJoaco}
                alt="Facilitador Joaquín"
                className="w-20 h-20 rounded-full object-cover shadow"
            />
            <div>
                <h4 className="font-semibold text-wood-brown">Joaquín Van der Gothe</h4>
                <p className="text-sm text-wood-brown/80">
                Instructor de Unatural hace ya mas de tres años. <br /> Amante del surf <br /> Fuerte creyente de que salud se relaciona con actividad, movibilidad y naturaleza.
                </p>
            </div>
            </div>
        </div>

        <div className="text-center">
            <a
            href={whatsappLink("U Natural")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded-full"
            >
            Inscripción por WhatsApp
            </a>
        </div>
        </section>

        </div>
    );
};

export default SurfClub;
