import { useState } from "react";
import { Link } from "react-router-dom";
import { useMobileMenu } from "../context/MenuMobileContext";

const categories = [
    "Promociones",
    "Entradas",
    "Ensaladas",
    "Frituras",
    "Frituras para compartir",
    "Minutas Porciones",
    "Sandwich Frío",
    "Sandwich Caliente",
    "Minutas",
    "Pescados",
    "Salsas para pescados",
    "Pastas Caseras",
    "Salsas para pastas",
    "Menú Infantil",
    "Postres",
    "Bebidas sin alcohol",
    "Bebidas con alcohol",
    "Aperitivos",
    "Vinos"
];

const menuData = {
    Promociones: [
        {
        name: "Langostinos + Stella / Limonada",
        price: 20900,
        description: ""
        },
        {
        name: "Menú de Merluza",
        price: 16000,
        description: "Merluza acompañada con guarnición, bebida y postre."
        }
    ],
    Entradas: [
        { name: "Tortilla de papa", price: 12000 },
        { name: "Tortilla a la española", price: 14000 },
        { name: "Revuelto de gramajo", price: 13500 },
        { name: "Omelette con jamón y queso", price: 12000 },
        { name: "Omelette con champiñones", price: 14500 }
    ],
    Ensaladas: [
        {
        name: "Ensalada de Mar",
        price: 15000,
        description: "Mix de verdes, apio, manzana y langostinos."
        },
        {
        name: "Serrana",
        price: 15000,
        description: "Rúcula, tomate cherry, parmesano, jamón crudo, aceitunas negras y semillas de sésamo."
        },
        {
        name: "Especial",
        price: 13500,
        description: "Arroz, arvejas, tomate, atún, jamón y queso."
        },
        {
        name: "Americana",
        price: 13500,
        description: "Lechuga, tomate, palmitos, queso, choclo, huevo y aceitunas."
        },
        {
        name: "César",
        price: 13500,
        description: "Mix de verdes, parmesano, dados de pollo, croutones y salsa César."
        },
        {
        name: "Waldorf",
        price: 15000,
        description: "Manzana verde, apio, palmitos, crema y nueces."
        },
        {
        name: "Caprese",
        price: 12000,
        description: "Tomate, mozzarella y albahaca."
        },
        { name: "Rúcula y parmesano", price: 9500 },
        {
        name: "Green",
        price: 9500,
        description: "Rúcula, apio, lechuga y palta."
        },
        {
        name: "Mixta",
        price: 8500,
        description: "Lechuga, tomate y cebolla."
        },
        {
        name: "Pastel de choclo",
        price: 12000,
        description: "Choclo, albahaca y cebolla."
        },
        { name: "Salteado de zapallito", price: 13500 },
        { name: "Wok de vegetales", price: 13500 }
    ],
    "Frituras": [
        { name: "Rabas", price: 14500 },
        { name: "Cornalitos", price: 10000 },
        { name: "Calamaretis", price: 19000 },
        { name: "Langostinos empanados", price: 19000 },
        { name: "Mejillones a la provenzal", price: 20000 },
        { name: "Gambas al ajillo", price: 22000 }
    ],
    "Frituras para compartir": [
        {
        name: "Jardín de Mar",
        price: 35000,
        description: "Langostinos, rabas, cornalitos, calamaretis, mejillones a la provenzal, escabeche de calamar."
        },
        {
        name: "Langostinos La Gaviota",
        price: 33000,
        description: "Langostinos, panceta y queso, acompañado con papas a la española."
        }
    ],
    "Minutas Porciones": [
    { name: "Porción de papas fritas", price: 6500 },
    { name: "Papas a la provenzal", price: 7500, description: "Ajo y perejil." },
    { name: "Papas a la criolla", price: 8000, description: "Morrón y cebolla caramelizada." },
    { name: "Papas especial", price: 13500, description: "Cheddar y panceta ahumada." },
    { name: "Papas a la española", price: 13500, description: "Acompañadas de crema a las finas hierbas." },
    { name: "Porción de puré de papa", price: 6500 },
    { name: "Porción de puré de calabaza", price: 6500 }
    ],
    "Sandwich Frío": [
    { name: "Caramel", price: 9000, description: "Zanahoria caramelizada, tomate y palta." },
    { name: "Primavera", price: 9900, description: "Lechuga, tomate, huevo duro, jamón y queso." },
    { name: "Mediterráneo", price: 12000, description: "Rúcula, palmito, tomate, nueces y oliva." },
    { name: "Especial", price: 12000, description: "Jamón crudo, queso y manteca." },
    { name: "Básico", price: 8500, description: "Jamón y queso." }
    ],
    "Sandwich Caliente": [
    { name: "Milanesa de ternera", price: 12000, description: "Sola." },
    { name: "Milanesa de ternera con lechuga y tomate", price: 13500 },
    { name: "Milanesa de ternera con jamón y queso", price: 15000 },
    { name: "Milanesa de ternera completa", price: 16000, description: "Con lechuga, tomate, jamón, queso y huevo." },
    { name: "Lomito", price: 13000, description: "Solo." },
    { name: "Lomito con lechuga y tomate", price: 14500 },
    { name: "Lomito con jamón y queso", price: 16500 },
    { name: "Lomito completo", price: 18000, description: "Con lechuga, tomate, jamón, queso y huevo." },
    { name: "Lomito especial", price: 20000, description: "Jamón, parmesano, cebolla caramelizada, huevo a la plancha y cheddar." },
    { name: "Sandwich de pollo", price: 12000, description: "Solo." },
    { name: "Sandwich de pollo con lechuga y tomate", price: 13500 },
    { name: "Sandwich de pollo con jamón y queso", price: 15000 },
    { name: "Sandwich de pollo completo", price: 16000, description: "Con lechuga, tomate, jamón, queso y huevo." },
    { name: "Sandwich de pollo con tomate, rúcula y jugo de limón", price: 14500 }
    ],
    "Minutas": [
    { name: "Milanesa de ternera", price: 13500, description: "Con guarnición." },
    { name: "Milanesa de ternera napolitana", price: 17500, description: "Salsa de tomate, jamón y queso. Con guarnición." },
    { name: "Milanesa de ternera a la suiza", price: 15500, description: "Queso y salsa blanca. Con guarnición." },
    { name: "Suprema", price: 13500, description: "Con guarnición." },
    { name: "Suprema napolitana", price: 17500, description: "Salsa de tomate, jamón y queso. Con guarnición." },
    { name: "Suprema a la suiza", price: 15500, description: "Queso y salsa blanca. Con guarnición." },
    { name: "Lomito al plato solo", price: 13000 },
    { name: "Lomito al plato con guarnición", price: 15000 },
    { name: "Bife de lomo al plato", price: 19000, description: "Con guarnición." },
    { name: "Bife de lomo completo", price: 22000, description: "Con papas fritas y dos huevos fritos." },
    { name: "Bife de chorizo al plato", price: 19000, description: "Con guarnición." },
    { name: "Bife de chorizo completo", price: 22000, description: "Con papas fritas y dos huevos fritos." },
    { name: "Pollo a la plancha", price: 14500, description: "(Pata muslo o pechuga) con guarnición." }
    ],
    "Pescados": [
    { name: "Merluza a la romana", price: 9900, description: "Con guarnición." },
    { name: "Lenguado a la plancha", price: 15500, description: "Con guarnición." },
    { name: "Lenguado a la romana", price: 15000, description: "Con guarnición." },
    { name: "Abadejo grillé", price: 16000, description: "Con guarnición." },
    { name: "Salmón blanco", price: 15000, description: "Con guarnición." },
    { name: "Salmón rosado grillé", price: 28000, description: "Con guarnición." },
    { name: "Paella", price: 32000 },
    { name: "Arroz con mariscos", price: 32000 },
    { name: "Cazuela de mariscos", price: 35000 }
    ],
    "Salsas para pescados": [
    { name: "Cuatro quesos", price: 5000, description: "Crema, parmesano, roquefort y reggianito." },
    { name: "Putanesca", price: 5000, description: "Tomate, atún, alcaparras, aceitunas y ají picante." },
    { name: "Roquefort", price: 5000, description: "Crema y roquefort." },
    { name: "Crema", price: 3500, description: "Salsa de crema." },
    { name: "A la vasca", price: 3500 },
    { name: "Al ajillo", price: 3500 },
    { name: "A la mostaza", price: 5000, description: "Mostaza, crema y parmesano." }
    ],
    "Pastas Caseras": [
    { name: "Ñoquis de papa", price: 8500 },
    { name: "Tallarines", price: 8500 },
    { name: "Ravioles de espinaca y ricota", price: 11000 },
    { name: "Sorrentinos de jamón y queso", price: 13000 },
    { name: "Sorrentinos de calabaza y mozzarella", price: 13000 },
    { name: "Sorrentinos de langostinos y queso", price: 15000 }
    ],
    "Salsas para pastas": [
    { name: "Fileto, rosa o mixta", price: 3500 },
    { name: "Crema", price: 3500 },
    { name: "Bolognesa", price: 5000 },
    { name: "Estofado de carne", price: 6000 },
    { name: "Pesto", price: 4500 },
    { name: "Camarones a la crema", price: 6900 },
    { name: "Camarones al tomate", price: 6900 },
    { name: "Mariscos al tomate", price: 7900 }
    ],
    "Menú Infantil": [
    { name: "Lomito con puré", price: 10900 },
    { name: "Tallarines con salsa mixta", price: 9900 },
    { name: "Bastoncitos de pollo con papas fritas", price: 9900 }
    ],
    "Postres": [
    { name: "Ensalada de fruta natural", price: 4500 },
    { name: "Ensalada de fruta natural con helado", price: 6000 },
    { name: "Frutillas con crema", price: 6000 },
    { name: "Copa helada con una bocha", price: 2500 },
    { name: "Copa helada con dos bochas", price: 5000 },
    { name: "Flan casero con dulce de leche o crema", price: 4500 },
    { name: "Panqueque con dulce de leche", price: 5000 },
    { name: "Panqueque de manzana (para dos)", price: 7500 },
    { name: "Waffle con dulce de leche", price: 4500 },
    { name: "Waffle con crema y frutos rojos", price: 5500 },
    { name: "Adicional de crema o dulce de leche", price: 1200 },
    { name: "Adicional de bocha de helado", price: 2500 }
    ],
    "Bebidas sin alcohol": [
    { name: "Agua con o sin gas 350cc", price: 2900 },
    { name: "Gaseosa Coca-Cola 350cc", price: 2900 },
    { name: "Gaseosa Coca-Cola 500cc", price: 3500 },
    { name: "Aquarius 500cc", price: 3500 },
    { name: "Limonada común chica", price: 3500 },
    { name: "Limonada común grande", price: 6000 },
    { name: "Limonada con jengibre y menta chica", price: 4000 },
    { name: "Limonada con jengibre y menta grande", price: 7000 },
    { name: "Licuado de frutas", price: 4000 },
    { name: "Daiquiri sin alcohol", price: 6500 },
    { name: "Jugo exprimido", price: 4000 }
    ],
    "Bebidas con alcohol": [
    { name: "Lata Andes", price: 3200 },
    { name: "Lata Stella", price: 4000 },
    { name: "Lata Patagonia", price: 4000 },
    { name: "Lata Stella 0.0", price: 4000 },
    { name: "Porrón Corona 330cc", price: 4500 },
    { name: "Cerveza Corona 710cc", price: 8000 },
    { name: "Cerveza Patagonia 730cc", price: 7000 },
    { name: "Stella Artois 1L", price: 7000 },
    { name: "Stella Artois Negra 1L", price: 7500 }
    ],
    "Aperitivos": [
    { name: "Gancia", price: 6000 },
    { name: "Gancia Hibiscus", price: 6500 },
    { name: "Fernet Branca", price: 6000 },
    { name: "Campari Orange", price: 6500 },
    { name: "Campari Tonic", price: 6500 },
    { name: "Aperol Spritz", price: 6500 },
    { name: "Vermouth Cinzano Rosso", price: 6000 },
    { name: "Amargo Obrero", price: 6000 },
    { name: "Cynar Pomelo", price: 6000 },
    { name: "Cynar Julep", price: 6000 },
    { name: "Gin Sur Tonic", price: 6500 },
    { name: "Gin Sur Naranja de Barrio", price: 6500 },
    { name: "Gin Malaria", price: 7900 },
    { name: "Gin Aconcagua Tonic", price: 6500 },
    { name: "Jarra de frutas", price: 14900 },
    { name: "Clericó Mario Blanco Dulce", price: 24500 },
    { name: "Clericó Álamos Dulce Natural", price: 26000 },
    { name: "Sangría Álamos Malbec", price: 26000 }
    ],
    "Vinos": [
    { name: "Zorzal Malbec", price: 9500 },
    { name: "Zorzal Pinot Noir", price: 9500 },
    { name: "Zorzal Sauvignon", price: 9500 },
    { name: "Zorzal Rosé", price: 9900 },
    { name: "Uno Malbec", price: 12000 },
    { name: "Uno Malbec 375cc", price: 7500 },
    { name: "Uno Chardonnay", price: 12000 },
    { name: "Uno Extra Brut", price: 17000 },
    { name: "Manos Negras Malbec", price: 13000 },
    { name: "Manos Negras Pinot Noir", price: 13000 },
    { name: "Manos Negras Chardonnay", price: 13000 },
    { name: "Manos Negras Brut Nature", price: 17900 },
    { name: "Terrazas Reserva Malbec", price: 17500 },
    { name: "Altos del Plata Malbec", price: 11000 },
    { name: "Altos del Plata Chardonnay", price: 11000 },
    { name: "Latitud 33 Malbec", price: 9000 },
    { name: "Latitud 33 Cabernet", price: 9000 },
    { name: "Latitud 33 Chardonnay", price: 9000 },
    { name: "Nicasia Malbec", price: 15000 },
    { name: "Barón B Extra Brut", price: 39000 },
    { name: "Chandon Extra Brut", price: 19900 },
    { name: "Álamos Malbec", price: 14900 },
    { name: "Álamos Chardonnay", price: 14900 },
    { name: "Álamos Blanco Dulce", price: 14900 }
    ],
};

const Menu = () => {
    const { isMobileMenuOpen } = useMobileMenu();
    const [selected, setSelected] = useState("Promociones");

    const topOffset = isMobileMenuOpen ? "top-[145px]" : "top-[70px]";
    const scrollOffset = isMobileMenuOpen ? "scroll-mt-[220px]" : "scroll-mt-[145px]";

    return (
        <div className="bg-soft-cream min-h-screen px-4 pb-10 pt-4 md:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-menu text-wood-brown text-center w-full">
                MENÚ
            </h1>
        </div>

        {/* Categorías (anclas) */}
        <div className={`flex gap-3 overflow-x-auto p-4 rounded sticky ${topOffset} md:top-[100px] z-40 bg-wood-brown/60 nav-scroll backdrop-blur-sm shadow-sm`}>

            {categories.map((cat) => (
            <a
                key={cat}
                href={`#${cat.replace(/ /g, "-")}`}
                className=" whitespace-nowrap p-4 py-2 rounded font-general text-sm shadow transition-all duration-200 bg-soft-beige text-wood-brown hover:bg-wood-brown hover:text-soft-beige"
            >
                {cat}
            </a>
            ))}
        </div>

        {/* Secciones */}
        {Object.entries(menuData).map(([section, items]) => (
        <section
            key={section}
            id={section.replace(/ /g, "-")}
            className={`mt-10 ${scrollOffset} md:scroll-mt-45`} 
        >
            <h2 className="font-menu text-2xl text-wood-brown mb-4 text-center">
            {section}
            </h2>
            <div className="flex flex-col gap-4">
            {items.map((item, i) => (
                <div
                key={i}
                className="bg-soft-cream p-4 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center"
                >
                <div>
                    <h3 className="text-wood-brown font-bold text-lg font-general">
                    {item.name}
                    </h3>
                    {item.description && (
                    <p className="text-gray-700 text-sm font-general mt-1">
                        {item.description}
                    </p>
                    )}
                </div>
                <span className="text-wood-brown text-lg font-general mt-2 md:mt-0 md:ml-6">
                    ${item.price.toLocaleString("es-AR")}
                </span>
                </div>
            ))}
            </div>
        </section>
        ))}
        </div>
    );
};

export default Menu;

