// src/components/Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-soft-beige text-wood-brown p-6 shadow-md font-general text-center">
            <p className="text-lg mb-3 font-title">Contáctanos</p>
            <div className="flex justify-center gap-6 items-center">
                <a
                    href="https://www.instagram.com/tu_instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-wood-dark transition-colors duration-300"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                    href="https://wa.me/5491123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-wood-dark transition-colors duration-300"
                >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
