import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function WaveBackground() {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <svg
            className="absolute left-0 bottom-0 h-24 w-[200%] animate-wave"
            viewBox="0 0 1200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
            fill="#38bdf8"
            d="M0,50 C150,100 300,0 600,50 C900,100 1050,0 1200,50 L1200,100 L0,100 Z"
            />
        </svg>
        <svg
            className="absolute left-1/2 bottom-0 h-24 w-[200%] animate-wave"
            viewBox="0 0 1200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
            fill="#38bdf8"
            d="M0,50 C150,100 300,0 600,50 C900,100 1050,0 1200,50 L1200,100 L0,100 Z"
            />
        </svg>
        </div>
    );
    }

    const Footer = () => (
    <footer className="relative bg-soft-beige text-wood-brown py-8 px-4 shadow-inner font-general text-center mt-auto overflow-hidden">
        <div className="relative z-10">
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
        </div>
    </footer>
);

export default Footer;
