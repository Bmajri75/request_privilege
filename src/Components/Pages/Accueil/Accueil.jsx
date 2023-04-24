import style from "./Accueil.module.scss";
import Header from "../../Header/Header";
import logo_R from "../../../assets/images/bcg/logo_R&P.jpg";

function Accueil() {
  return (
    <>
      <Header />
      <main className={style.container}>
        <div className={style.imageContainer}>
          <img
            src={logo_R}
            alt="logo request et privilege"
            className={style.image}
          />
        </div>
        <div className={style.welcomeTextContainer}>
          <p>Bienvenue Madame, Monsieur, Comment puis-je vous être utile ?</p>
        </div>
      </main>
    </>
  );
}

export default Accueil;
