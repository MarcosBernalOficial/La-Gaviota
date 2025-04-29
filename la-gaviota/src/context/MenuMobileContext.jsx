import { createContext, useState, useContext } from "react";

const MenuMobileContext = createContext();

export const MenuMobileProvider = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <MenuMobileContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
        {children}
        </MenuMobileContext.Provider>
    );
};

export const useMobileMenu = () => useContext(MenuMobileContext);