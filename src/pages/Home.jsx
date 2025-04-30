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
        <div className="lg:col-span-2 self-center">
            <CardLink to="/eventos" title="Eventos" font="font-eventos">
            <Carousel images={[evento1, evento2, evento3]} />
            </CardLink>
        </div>

        {/* Carruseles secundarios */}
        <div className="lg:col-span-3 mt-10">

        {/* Título Surf Club */}
            <h2 className="text-center font-surfClub text-3xl text-wood-brown font-bold mb-6">
            Surf Club
            </h2>

            {/* Grid de las cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-soft-beige p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            
            {/* Clases de Surf */}
            <CardLink to="/surfclub" title="Clases de Surf" font="font-surfClub">
                <Carousel images={[surf1, surf2, surf3]} />
            </CardLink>

            {/* U Natural */}
            <CardLink to="/surfclub" title="U Natural" font="font-surfClub">
                <Carousel images={[natural1, natural2, natural3]} />
            </CardLink>

            </div>
        </div>

        {/* Menú Promociones */}
        <Link
        to="/menu"
        className="scroll-smoothbar bg-soft-beige backdrop-blur-md rounded-2xl p-6 shadow-2xl flex flex-col justify-between hover:shadow-3xl transition-all duration-300 cursor-pointer max-h-[300px] md:max-h-[450px] overflow-y-auto"
        >
        <div>
            <h2 className="text-center font-menu text-3xl text-wood-brown font-bold mb-6">
            Menú del Día
            </h2>
            <div className="flex flex-col gap-6">
            {/* Producto 1 */}
            <div className="bg-soft-beige p-4 rounded-xl shadow-md hover:shadow-lg transition snap-start">
                <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="text-xl text-wood-brown mb-2 font-general">
                    Rabas + Stella
                </h3>
                <span className="text-wood-brown text-lg font-general whitespace-nowrap">
                    $19.900
                </span>
                </div>
                <p className="text-gray-700 text-sm mt-2 font-general">
                Porción de rabas + Stella o limonada grande
                </p>
            </div>

            {/* Producto 2 */}
            <div className="bg-soft-beige p-4 rounded-xl shadow-md hover:shadow-lg transition snap-start">
                <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="text-xl font-general text-wood-brown mb-2">
                    Menú File de Merluza
                </h3>
                <span className="text-wood-brown text-lg font-general whitespace-nowrap">
                    $16.000
                </span>
                </div>
                <p className="text-gray-700 text-sm mt-2 font-general">
                File de merluza + guarnición + bebida + postre
                </p>
            </div>

            {/* Producto 3 - Nuevo: Menú de Milanesa */}
            <div className="bg-soft-beige p-4 rounded-xl shadow-md hover:shadow-lg transition snap-start">
                <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="text-xl font-general text-wood-brown mb-2">
                    Menú de Milanesa
                </h3>
                <span className="text-wood-brown text-lg font-general whitespace-nowrap">
                    $15.500
                </span>
                </div> 
                <p className="text-gray-700 text-sm mt-2 font-general">
                Milanesa de carne o pollo + papas fritas + bebida
                </p>
            </div>

            {/* Producto 4 - Nuevo: Menú de Pastas */}
            <div className="bg-soft-beige p-4 rounded-xl shadow-md hover:shadow-lg transition snap-start">
                <div className="flex justify-between items-center flex-wrap gap-2">
                <h3 className="text-xl font-general text-wood-brown mb-2">
                    Menú de Pastas
                </h3>
                <span className="text-wood-brown text-lg font-general whitespace-nowrap">
                    $17.800
                </span>
                </div>
                <p className="text-gray-700 text-sm mt-2 font-general">
                Pastas caseras + salsa a elección + bebida incluida
                </p>
            </div>
            </div>
        </div>
        </Link>
        </div>
    );
};

export default Home;