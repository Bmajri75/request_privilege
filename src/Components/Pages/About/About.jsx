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
            répond à tous vos besoins, où que vous soyez en France. Fondée par
            trois ardents du corps expérimentés, nous sommes nés de la demande
            croissante de services exclusifs et sur mesure.
          </p>
          <p>
            Nos fondateurs ont travaillé aux côtés de certaines personnalités
            les plus influentes du monde, que ce soit dans l'industrie de la
            mode, du cinéma ou de la finance, développant une expertise
            approfondie dans la prestation de services de sécurité, de confort
            et de luxe.
          </p>
          <p>
            Nous sommes fiers d'avoir créé un réseau étendu de partenaires et
            prestataires soigneusement sélectionnés pour offrir à nos clients
            des expériences uniques et exceptionnelles.
          </p>
          <p>
            Notre engagement envers la qualité, la discrétion et le
            professionnalisme nous distingue de la concurrence. Que vous
            cherchiez à réserver une table dans le meilleur restaurant de la
            ville, à obtenir des billets pour un événement exclusif ou à
            organiser un voyage en jet privé, etc., nous sommes là pour vous
            aider 24h/7.
          </p>
          <p>
            Chez Request&Privilege, nous sommes passionnés par ce que nous
            faisons et nous sommes fiers de fournir un service soigné,
            personnalisé et haut de gamme à chaque client.
          </p>
          <p>N'hésitez pas à nous contacter afin de découvrir nos offres.</p>
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
