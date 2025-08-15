import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Menu from "./views/Menu";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css"

function App() {
  return (
    <>
      <NavBar style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} />
      
      {/* Este main crece y empuja el footer */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App
