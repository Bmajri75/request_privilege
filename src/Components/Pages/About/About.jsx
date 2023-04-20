import style from "./About.module.scss";
import Header from "../../Header/Header";
import videoWalking from "../../../assets/videos_front_end/manWalking.mp4";
import logo from "../../../assets/images/bcg/requestPrivilege-bcg.jpg";

function About() {
  return (
    <>
      <Header />
      <main className={`${style.container}`}>
        <div className={` ${style.textPresentation}`}>
          <h1>À propos</h1>
          <p>
            Bienvenue chez Request&Privilege, la conciergerie privée de luxe qui
            repond a tous vos besoins. ou que vous souez en France. Fondee par
            trois aardes du coros expérimentes. nous sommes nes de la cemande
            croissante de services exclusifs et. sur mesure
          </p>
          <p>
            Nos fondateurs ont travailles aux cote de certaines personnalités
            les ous influentes du monde. aue ce soit dans indstrie de la mode,
            di cinéma ou de la finance, développant une expertise approfondie
            dans la prestation de service de sécurité, de confort et de luxe
          </p>
          <p>
            Nous sommes fiers d'avoir crée un réseau etendu de partenaires et
            prestataires soigneusements sélectionnés pour offrir à nos clients
            des expériences uniques et exceptionnelles
          </p>
          <p>
            Notre engagement envers la qualité, la discréction et le
            professionnalisme nous distinque de a concurence. Oue vous cherchiez
            à réserver une table dans le meileur restaurant de a vile. a obtenir
            des billets pour un evenement exclusir ou a organiser un voyage en
            jet privé, etc., nous sommes là pour vous aider 24h/7.
          </p>

          <p>
            Chez Request&Privilege, nous sommes passionnés par ce que nous
            Taisons et nous sommes tiers de Tournir un service soigne
            personnalise et haut de gamme a chaque client
          </p>

          <p>N'hésitez pas à nous contacter afin de decouvrir nos offres.</p>
        </div>
        <div className={`${style.videoContainer}`}>
          <video className={`${style.videoPlayer}`} autoPlay loop>
            <source src={videoWalking} type="video/mp4" />
            Votre navigateur ne prend pas en charge la vidéo.
          </video>
          <div>
            <img src={logo} alt="logo request et Privilege" />
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
