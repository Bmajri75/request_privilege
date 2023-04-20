import style from "./App.module.scss";
import Accueil from "./Components/Pages/Accueil/Accueil";
import About from "./Components/Pages/About/About";
import Prestations from "./Components/Pages/Prestations/Prestations";
import Contact from "./Components/Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={`d-flex flex-column ${style.appContainer}`}>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
