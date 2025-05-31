import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-soft-beige text-wood-brown py-6 px-4 shadow-inner font-general text-center mt-auto">
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
                    href="https://www.google.com/maps/place/La+Gaviota+MDP/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-wood-dark transition-colors duration-300"
                >
                    <FontAwesomeIcon icon={faLocationDot} size="2x" />
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
