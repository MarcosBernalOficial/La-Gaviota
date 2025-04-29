import CardLink from "../components/CardLink";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";

// Importo imágenes distintas
import evento1 from "../assets/evento1.jpg";
import evento2 from "../assets/evento2.jpg";
import evento3 from "../assets/evento3.jpg";

import surf1 from "../assets/surf1.jpg";
import surf2 from "../assets/surf2.jpg";
import surf3 from "../assets/surf3.jpg";

import natural1 from "../assets/natural1.jpg";
import natural2 from "../assets/natural2.jpg";
import natural3 from "../assets/natural3.jpg";

const Home = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto">
        
        {/* Carrusel principal - Eventos */}
        <div className="lg:col-span-2">
            <CardLink to="/eventos" title="Eventos">
            <Carousel images={[evento1, evento2, evento3]} />
            </CardLink>
        </div>

        {/* Menú Promociones */}
        <Link
        to="/menu"
        className="bg-soft-beige backdrop-blur-md rounded-2xl p-6 shadow-2xl flex flex-col justify-between hover:shadow-3xl transition-all duration-300 cursor-pointer"
        >
        <div>
            <h2 className="text-center font-title text-3xl text-wood-brown font-bold mb-6">Promociones</h2>
            <div className="flex flex-col gap-6">
            <div className="bg-soft-beige p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-wood-brown mb-2">
                Rabas + Stella
                </h3>
                <span className="text-wood-brown text-lg font-semibold">
                $19.900
                </span>
            </div>
            <p className="text-gray-700 text-sm mt-2">
                Porción de rabas + Stella o limonada grande
            </p>
            </div>

            <div className="bg-soft-beige p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-wood-brown mb-2">
                Menú File de Merluza
                </h3>
                <span className="text-wood-brown text-lg font-semibold">
                $16.000
                </span>
            </div>
            <p className="text-gray-700 text-sm mt-2">
                File de merluza + guarnición + bebida + postre
            </p>
            </div>
            </div>
        </div>
        </Link>


        {/* Carruseles secundarios */}
        <div className="lg:col-span-3 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* U Natural */}
            <CardLink to="/surfclub" title="U Natural">
                <Carousel images={[natural1, natural2, natural3]} />
            </CardLink>

            {/* Clases de Surf */}
            <CardLink to="/surfclub" title="Clases de Surf">
                <Carousel images={[surf1, surf2, surf3]} />
            </CardLink>

            </div>
        </div>
        </div>
    );
};

export default Home;