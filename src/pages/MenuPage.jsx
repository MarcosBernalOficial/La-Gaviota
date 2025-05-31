import { Link } from "react-router-dom";
import Carousel from "../components/CarouselLink";
import cafeteria from "../assets/images/menu.jpg";
import cafes from "../assets/images/menu.jpg";
import menu from "../assets/images/menu.jpg";
import postres from "../assets/images/menu.jpg";


const slidesBreakFast = [
    { src: cafeteria, title: "Cafetería", to: "/menu/desayuno-merienda" },
    { src: cafes, title: "Cafes", to: "/menu/desayuno-merienda" },
    { src: menu, title: "Desayunos", to: "/menu/desayuno-merienda" },
    { src: postres, title: "Mini Tortas", to: "/menu/desayuno-merienda" }
];

const slidesMenu = [
    { src: cafes, title: "Menú", to: "/menu/almuerzo-cena" },
    { src: menu, title: "Desayunos", to: "/menu/almuerzo-cena" },
    { src: postres, title: "Mini Tortas", to: "/menu/almuerzo-cena" }
];


export default function MenuPage() {
    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-start gap-10 px-4 py-8">
            <h2 className="text-3xl md:text-4xl font-menu text-wood-brown text-center">Cafetería</h2>
            <Carousel slides={slidesBreakFast} />
            <h2 className="text-3xl md:text-4xl font-menu text-wood-brown text-center">MENÚ</h2>
            <Carousel slides={slidesMenu} />
        </div>
    );
}
