import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SurfClub from "./pages/SurfClub";
import Eventos from "./pages/Eventos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Proximamente from "./components/Proximamente";
import About from "./pages/About";
import "slick-carousel/slick/slick.css";
import MenuPage from "./pages/MenuPage";
import BreakfastMenu from "./pages/BreakfastMenu";
import LunchDinnerMenu from "./pages/LunchDinnerMenu";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Espera a que el DOM y los recursos principales estén listos
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Router>
        <Navbar />
        <div className=" flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-soft-beige">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/surfclub" element={<SurfClub />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/proximamente" element={<Proximamente />} />
              <Route path="/sobreNosotros" element={<About />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/desayuno-merienda" element={<BreakfastMenu />} />
              <Route path="/menu/almuerzo-cena" element={<LunchDinnerMenu />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
