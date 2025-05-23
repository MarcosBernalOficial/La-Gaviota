import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SurfClub from "./pages/SurfClub";
import Eventos from "./pages/Eventos";
import Menu from "./pages/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Proximamente from "./components/Proximamente";

function App() {
  return (
    <Router basename="/La-Gaviota">
      <Navbar />
      <div className=" flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-soft-beige p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surfclub" element={<SurfClub />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/proximamente" element={<Proximamente />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
