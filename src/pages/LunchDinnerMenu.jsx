import MenuBase from "../components/MenuBase";
import { menuData } from "../data/menuData";

const lunchCategories = Object.keys(menuData).filter(
    (key) => ![
        "Cafetería Caliente",
        "Cafetería Fria",
        "Latte Time",
        "Carta de Té",
        "Mini Tortas",
        "Desayunos",
        "Para Compartir",
        "Productos Fit",
        "Desayunos Fit",
        "Sin TACC"
    ].includes(key)
);

export default function LunchDinnerMenu() {
    const filteredData = Object.fromEntries(
        Object.entries(menuData).filter(([key]) => lunchCategories.includes(key))
    );

    return <MenuBase title="Menú" menuData={filteredData} />;
}
