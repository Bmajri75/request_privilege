import style from "./Prestation.module.scss";
import Header from "../../Header/Header";
import logo from "../../../assets/images/bcg/requestPrivilege-bcg.jpg";
import Service from "../../Service/Service.jsx";

function Prestations() {
  return (
    <>
      <Header />
      <div className={`${style.container}`}>
        <h1>Les prestation de</h1>
        <div className={`${style.imageContainer}`}>
          <img src={`${logo}`} alt="logo de request and privilege" />
          <div className={style.serviceContainer}>
            <Service name="Réservations" />
            <Service name="A votre service" />
            <Service name="Locations et acquisitions" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Prestations;
