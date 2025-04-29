import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // iconos (puede ser cualquier otro paquete)

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="block md:hidden bg-soft-beige shadow-md px-6 py-4 relative z-50">
        <div className="flex items-center justify-between">
            {/* Título centrado */}
            <h1 className="text-2xl font-title text-wood-brown mx-auto">
            La Gaviota
            </h1>

            {/* Botón hamburguesa */}
            <button
            className="absolute right-4 top-4 text-wood-brown md:hidden"
            onClick={() => setOpen(!open)}
            >
            {open ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Menú desplegable */}
        {open && (
            <div className="mt-4 flex flex-row justify-center items-center gap-4 md:hidden bg-wood-brown rounded-xl shadow p-4 transition-all">
            <Link to="/surfclub" onClick={() => setOpen(false)} className="text-soft-beige font-medium">
                Surf Club
            </Link>
            <Link to="/eventos" onClick={() => setOpen(false)} className="text-soft-beige font-medium">
                Eventos
            </Link>
            <Link to="/menu" onClick={() => setOpen(false)} className="text-soft-beige font-medium">
                Menú
            </Link>
            </div>
        )}
        </nav>
    );
};

export default Navbar;
