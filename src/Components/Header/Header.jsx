import { NavLink } from "react-router-dom";
import frenchFlag from "../../assets/images/flags/france.png";
import ukFlag from "../../assets/images/flags/united-kingdom.png";

import style from "./Header.module.scss";

function Header() {
  return (
    <header className={`d-flex ${style.header}`}>
      <nav className={` d-flex align-items-center ${style.headerContent}`}>
        <ul className="d-flex">
          <NavLink to={"/"}>
            {" "}
            <li>Accueil</li>
          </NavLink>
          <NavLink to={"/about"}>
            {" "}
            <li>À propos</li>
          </NavLink>
          <NavLink to={"/prestations"}>
            {" "}
            <li>Nos Prestations</li>
          </NavLink>
          <NavLink to={"/contact"}>
            {" "}
            <li>Contact</li>
          </NavLink>
        </ul>
        <div className={`d-flex ${style.flagContent}`}>
          <img src={frenchFlag} alt="drapeau Français" />
          <img src={ukFlag} alt="drapeau UK" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
