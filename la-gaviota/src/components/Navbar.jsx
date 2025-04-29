import { useMobileMenu } from "../context/MenuMobileContext";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    return (
        <nav className="sticky top-0 z-50 block md:hidden bg-soft-beige shadow-md px-6 py-4 relative">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-title text-wood-brown mx-auto">La Gaviota</h1>
            <button
            className="absolute right-4 top-4 text-wood-brown md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {isMobileMenuOpen && (
            <div className="mt-4 flex flex-row place-content-evenly items-center gap-4 md:hidden bg-wood-brown/80 rounded-xl shadow p-4 transition-all">
            <Link to="/surfclub" onClick={() => setIsMobileMenuOpen(false)} className="text-soft-beige font-medium">
                Surf Club
            </Link>
            <Link to="/eventos" onClick={() => setIsMobileMenuOpen(false)} className="text-soft-beige font-medium">
                Eventos
            </Link>
            <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-soft-beige font-medium">
                Menú
            </Link>
            </div>
        )}
        </nav>
    );
};
export default Navbar;
