import CardLink from "../components/CardLink";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import evento1 from "../assets/evento1.jpg";
import evento2 from "../assets/evento2.jpg";
import evento3 from "../assets/evento3.jpg";

import surf1 from "../assets/surf1.jpg";
import surf2 from "../assets/surf2.jpg";
import surf3 from "../assets/surf3.jpg";

import natural1 from "../assets/natural1.jpg";
import natural2 from "../assets/natural2.jpg";
import natural3 from "../assets/natural3.jpg";

import portada1 from "../assets/surf1.jpg";
import portada2 from "../assets/natural1.jpg";
import portada3 from "../assets/evento1.jpg";
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
        <div className="px-6 max-w-7xl mx-auto space-y-12">

            {/* Collage Responsive con Carouseles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="rounded-xl overflow-hidden shadow-lg col-span-1 sm:col-span-2 md:col-span-2">
                    <Carousel images={[surf1, surf2, surf3]} />
                </div>
                <div className="rounded-xl overflow-hidden shadow hidden sm:block">
                    <Carousel images={[natural1, natural2]} />
                </div>
                <div className="rounded-xl overflow-hidden shadow">
                    <Carousel images={[evento1, evento2]} />
                </div>
                <div className="rounded-xl overflow-hidden shadow hidden md:block">
                    <Carousel images={[surf2, surf3]} />
                </div>
                <div className="rounded-xl overflow-hidden shadow hidden md:block">
                    <Carousel images={[natural2, natural3]} />
                </div>
            </div>

            {/* Carrusel de eventos */}
            <div className="w-full">
                <CardLink to="/eventos" title="Eventos" font="font-eventos">
                    <Carousel images={[evento1, evento2, evento3]} />
                </CardLink>
            </div>

            {/* Surf Club */}
            <div>
                <h2 className="text-center font-surfClub text-3xl text-wood-brown font-bold mb-6">
                    Surf Club
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-soft-beige p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardLink to="/surfclub" title="Clases de Surf" font="font-surfClub">
                        <Carousel images={[surf1, surf2, surf3]} />
                    </CardLink>
                    <CardLink to="/surfclub" title="U Natural" font="font-surfClub">
                        <Carousel images={[natural1, natural2, natural3]} />
                    </CardLink>
                </div>
            </div>

            {/* Menú Promociones */}
            <Link
                to="/menu"
                className="bg-soft-beige backdrop-blur-md rounded-2xl p-6 shadow-2xl flex flex-col justify-between hover:shadow-3xl transition-all duration-300 cursor-pointer max-h-[300px] md:max-h-[450px] overflow-y-auto scrollbar-hide"
            >
                <h2 className="text-center font-menu text-3xl text-wood-brown font-bold mb-6">
                    Menú del Día
                </h2>
                <div className="flex flex-col gap-6">
                    {[
                        {
                            title: "Rabas + Stella",
                            price: "$19.900",
                            desc: "Porción de rabas + Stella o limonada grande",
                        },
                        {
                            title: "Menú File de Merluza",
                            price: "$16.000",
                            desc: "File de merluza + guarnición + bebida + postre",
                        },
                        {
                            title: "Menú de Milanesa",
                            price: "$15.500",
                            desc: "Milanesa de carne o pollo + papas fritas + bebida",
                        },
                        {
                            title: "Menú de Pastas",
                            price: "$17.800",
                            desc: "Pastas caseras + salsa a elección + bebida incluida",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-soft-beige p-4 rounded-xl shadow-md hover:shadow-lg transition snap-start"
                        >
                            <div className="flex justify-between items-center flex-wrap gap-2">
                                <h3 className="text-xl text-wood-brown mb-2 font-general">{item.title}</h3>
                                <span className="text-wood-brown text-lg font-general whitespace-nowrap">
                                    {item.price}
                                </span>
                            </div>
                            <p className="text-gray-700 text-sm mt-2 font-general">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Link>
        </div>
    );
};

export default Home;
