import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Service from "./pages/service/Service";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
