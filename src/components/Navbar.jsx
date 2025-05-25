import { useMobileMenu } from "../context/MenuMobileContext";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    return (
        <nav className="sticky top-0 z-50 block md:hidden bg-soft-beige shadow-md px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Título con Link al Home */}
                <Link to="/" className="mx-auto">
                    <h1 className="text-2xl font-title text-wood-brown text-center">La Gaviota</h1>
                </Link>

                {/* Botón hamburguesa */}
                <button
                    className="absolute right-4 top-4 text-wood-brown md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Menú desplegable con animación */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-4 md:hidden bg-wood-brown rounded-xl shadow px-4 overflow-hidden"
                    >
                        <div className="flex flex-row place-content-evenly items-center gap-4 py-4">
                            <Link to="/proximamente" onClick={() => setIsMobileMenuOpen(false)} className="text-soft-beige font-medium">
                                Surf Club
                            </Link>
                            <Link to="/eventos" onClick={() => setIsMobileMenuOpen(false)} className="text-soft-beige font-medium">
                                Eventos
                            </Link>
                            <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-soft-beige font-medium">
                                Menú
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
