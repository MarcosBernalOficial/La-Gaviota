import MenuBase from "../components/MenuBase";
import { menuData } from "../data/menuData";

const breakfastCategories = [
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
];

export default function BreakfastMenu() {
    const filteredData = Object.fromEntries(
        Object.entries(menuData).filter(([key]) => breakfastCategories.includes(key))
    );

    return <MenuBase title="Menú" menuData={filteredData} />;
}
