import React from "react";
import Carousel from "../components/Carousel";
import profeMaxi from "../assets/images/profesor-maxi.jpg";

const SurfClub = () => {
    const whatsappLink = (actividad) =>
        `https://wa.me/542235535852?text=Hola!%20Quisiera%20consultar%20sobre%20${encodeURIComponent(actividad)}.`;

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

            <div className="mb-8 shadow-lg border border-wood-brown/10 rounded-xl overflow-hidden">
            <Carousel images={["/assets/surf1.jpg", "/assets/surf2.jpg", "/assets/surf3.jpg"]} />
            </div>

            <div className="bg-soft-beige p-6 rounded-xl shadow-md mb-10">
            <h3 className="text-2xl font-surfClub text-center text-wood-brown mb-6">
                Tipos de Clase
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-soft-cream rounded-lg p-4 shadow-inner">
                <h4 className="text-xl font-bold text-wood-brown mb-2 text-center">Individuales</h4>
                <p className="text-gray-800 text-sm">
                    Ideales para quienes recién comienzan o desean perfeccionar técnicas específicas.
                    La atención es personalizada y se adapta al ritmo del alumno.
                </p>
                <p className="text-wood-brown text-center mt-2 font-semibold">$9.000 por persona</p>
                </div>
                <div className="bg-soft-cream rounded-lg p-4 shadow-inner">
                <h4 className="text-xl font-bold text-wood-brown mb-2 text-center">Grupales</h4>
                <p className="text-gray-800 text-sm">
                    Perfectas para disfrutar en compañía. Se trabaja en grupo con consignas dinámicas
                    que fomentan el espíritu de equipo y la diversión.
                </p>
                <p className="text-wood-brown text-center mt-2 font-semibold">$6.500 por persona</p>
                </div>
            </div>
            </div>

            {/* Profesores */}
            <div className="bg-soft-beige p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-surfClub text-wood-brown text-center mb-6">
                Profesores
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-4">
                <img
                    src={profeMaxi}
                    alt="Profesor Maxi"
                    className="w-20 h-20 rounded-full object-cover shadow"
                />
                <div>
                    <h4 className="font-semibold text-wood-brown">Máximo Bernal</h4>
                    <p className="text-sm text-gray-700">10 años de experiencia. Ex competidor nacional.</p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                <img
                    src="/assets/profesora2.jpg"
                    alt="Profesora Juano"
                    className="w-20 h-20 rounded-full object-cover shadow"
                />
                <div>
                    <h4 className="font-semibold text-wood-brown">Juano</h4>
                    <p className="text-sm text-gray-700">Instructora certificada ISA. Estilo relajado y técnico.</p>
                </div>
                </div>
            </div>

            </div>
            <div className="text-center">
                <a
                href={whatsappLink("Clases de Surf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-wood-brown text-soft-beige px-4 py-2 mt-6 rounded-full"
                >
                Inscripción vía WhatsApp
                </a>
            </div>
        </section>

        {/* U Natural */}
        <section>
        <h2 className="text-3xl font-surfClub text-center text-wood-brown mb-6">
            U Natural
        </h2>

        <div className="mb-8 shadow-lg border border-wood-brown/10 rounded-xl overflow-hidden">
            <Carousel images={["/assets/natural1.jpg", "/assets/natural2.jpg", "/assets/natural3.jpg"]} />
        </div>

        <div className="bg-soft-beige p-6 rounded-xl shadow-md mb-10">
            <p className="text-gray-800 mb-4 font-general">
            U Natural es una experiencia integral al aire libre. Combina yoga, meditación y conciencia corporal en la playa, conectando cuerpo, mente y naturaleza.
            </p>

            {/* Tabla de días y horarios */}
            <div className="grid grid-cols-2 gap-4 text-sm text-soft-beige p-4 bg-wood-brown rounded-lg mb-4">
                <div className="font-semibold">Lunes y Miércoles</div>
                <div>08:00 - 09:00 hs</div>
                <div className="font-semibold">Viernes</div>
                <div>18:30 - 19:30 hs</div>
            </div>

            <p className="font-bold text-wood-brown">Valor mensual: $12.000</p>
        </div>

        {/* Profesor U Natural */}
        <div className="bg-soft-beige p-6 rounded-xl shadow-md max-w-md mx-auto mb-6">
            <h3 className="text-xl font-bold text-wood-brown mb-4 text-center">Profesor</h3>
            <div className="flex items-center gap-4">
            <img
                src="/assets/profesor-maxi.jpg"
                alt="Facilitador Joaquín"
                className="w-20 h-20 rounded-full object-cover shadow"
            />
            <div>
                <h4 className="font-semibold text-wood-brown">Joaquín Van der Gothe</h4>
                <p className="text-sm text-gray-700">
                Instructor de yoga con enfoque en conexión con la naturaleza y energía vital.
                </p>
            </div>
            </div>
        </div>

        <div className="text-center">
            <a
            href={whatsappLink("U Natural")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-wood-brown text-soft-beige px-4 py-2 rounded-full"
            >
            Inscripción vía WhatsApp
            </a>
        </div>
        </section>

        </div>
    );
};

export default SurfClub;
