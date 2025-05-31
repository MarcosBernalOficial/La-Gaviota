import { useMobileMenu } from "../context/MenuMobileContext";
import { useState } from "react";

export default function MenuBase({ title, menuData }) {
    const { isMobileMenuOpen } = useMobileMenu();
    const [selected, setSelected] = useState("");

    const categories = Object.keys(menuData);
    const topOffset = isMobileMenuOpen ? "top-[145px]" : "top-[70px]";
    const scrollOffset = isMobileMenuOpen ? "scroll-mt-[220px]" : "scroll-mt-[145px]";

    return (
        <div className="bg-soft-cream min-h-screen px-4 pb-10 pt-4 md:px-8">
            {/* Título */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-menu text-wood-brown text-center w-full">
                    {title}
                </h1>
            </div>

            {/* Categorías - Navegación horizontal */}
            <div className={`flex gap-3 overflow-x-auto p-4 rounded sticky ${topOffset} md:top-[100px] z-40 bg-wood-brown/60 nav-scroll backdrop-blur-sm shadow-sm`}>
                {categories.map((cat) => (
                    <a
                        key={cat}
                        href={`#${cat.replace(/ /g, "-")}`}
                        className="whitespace-nowrap p-4 py-2 rounded font-general text-sm shadow transition-all duration-200 bg-soft-beige text-wood-brown hover:bg-wood-brown hover:text-soft-beige"
                    >
                        {cat}
                    </a>
                ))}
            </div>

            {/* Secciones del menú */}
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
                                    {item.price !== undefined
                                        ? `$${item.price.toLocaleString("es-AR")}`
                                        : "—"}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
