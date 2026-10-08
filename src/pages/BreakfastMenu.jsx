import MenuBase from "../components/MenuBase";
import { cafeteriaData } from "../data/menuData";

export default function BreakfastMenu() {
    return <MenuBase title="Cafetería" menuData={cafeteriaData} />;
}
