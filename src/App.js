import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Extension from "./pages/service/Extension";
import Loft from "./pages/service/Loft";
import Design from "./pages/service/Design";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/house-extensions" element={<Extension />} />
          <Route path="/service/loft-conversions" element={<Loft />} />
          <Route path="/service/design-&-build" element={<Design />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/error-page" element={<errorPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
