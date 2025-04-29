import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-wood-brown text-soft-beige p-4 flex justify-between items-center">
        <Link to="/" className="font-title text-3xl">La Gaviota</Link>
        <nav className="flex gap-6">
            <Link to="/surfclub">Surf Club</Link>
            <Link to="/eventos">Eventos</Link>
            <Link to="/menu">Menú</Link>
        </nav>
        </header>
    );
};

export default Header;
