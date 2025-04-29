import { Link } from "react-router-dom";

const CardLink = ({ to, title, children }) => {
    return (
        <Link
        to={to}
        className="block relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.02] duration-300"
        >
        {/* Gradiente arriba */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/30 to-transparent z-10" />

        {/* Texto centrado arriba */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <h2 className="text-soft-beige text-2xl font-title font-bold drop-shadow-md text-center">
            {title}
            </h2>
        </div>

        {/* Carrusel de fondo */}
        <div className="w-full h-full">
            {children}
        </div>
        </Link>
    );
};

export default CardLink;
