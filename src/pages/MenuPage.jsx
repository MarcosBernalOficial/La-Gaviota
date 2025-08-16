import { Link } from "react-router-dom";
import Carousel from "../components/CarouselLink";

import Coffee1 from "../assets/images/cafe-1.jpg";
import Coffee2 from "../assets/images/cafe-cookies-1.jpg";
import Te1 from "../assets/images/te-1.jpg";
import Te2 from "../assets/images/ice-te-1.jpg";
import deMar from "../assets/images/cazuela-ensalada-de-mar-1.jpg";
import JardinDeMar from "../assets/images/jardin-de-mar-1.jpg";
import Langostinos from "../assets/images/langostinos-gaviota-1.jpg";
import Pasta1 from "../assets/images/pasta-1.jpg";
import Promos from "../assets/images/promociones-.jpg";
import vegan from "../assets/images/vegan-1.jpg";

const slidesBreakFast = [
    { src: Coffee1, title: "Coffee", to: "/menu/desayuno-merienda" },
    { src: Coffee2, title: "Coffee And Cookies", to: "/menu/desayuno-merienda" },
    { src: Te1, title: "Té", to: "/menu/desayuno-merienda" },
    { src: Te2, title: "Ice Té", to: "/menu/desayuno-merienda" }
];

const slidesMenu = [
    { src: deMar, title: "Marisqueria", to: "/menu/almuerzo-cena" },
    { src: JardinDeMar, title: "Para compartir", to: "/menu/almuerzo-cena" },
    { src: Langostinos, title: "Especialidades", to: "/menu/almuerzo-cena" },
    { src: Pasta1, title: "Pastas", to: "/menu/almuerzo-cena" },
    { src: Promos, title: "Promociones", to: "/menu/almuerzo-cena" },
    { src: vegan, title: "Vegan", to: "/menu/almuerzo-cena" }
];


export default function MenuPage() {
    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-start gap-10 px-4 py-8">
            <a href="/menu/desayuno-merienda" className="text-3xl md:text-4xl font-menu text-wood-brown text-center">Cafetería</a>
            <Carousel slides={slidesBreakFast} />
            <a href="/menu/almuerzo-cena" className="text-3xl md:text-4xl font-menu text-wood-brown text-center">MENÚ</a>
            <Carousel slides={slidesMenu} />
        </div>
    );
}
