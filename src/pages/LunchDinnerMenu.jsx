import MenuBase from "../components/MenuBase";
import { menuData } from "../data/menuData";

export default function LunchDinnerMenu() {
    return <MenuBase title="Menú" menuData={menuData} />;
}
