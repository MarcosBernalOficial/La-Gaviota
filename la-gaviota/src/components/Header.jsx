import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 hidden md:flex bg-wood-brown/80 text-soft-beige p-7 flex justify-between items-center">
        <Link to="/" className="font-title text-3xl">La Gaviota</Link>
        <nav className="flex gap-6">
            <Link to="/surfclub" className="font-title" >Surf Club</Link>
            <Link to="/eventos" className="font-title">Eventos</Link>
            <Link to="/menu" className="font-title">Menú</Link>
        </nav>
        </header>
    );
};

export default Header;
