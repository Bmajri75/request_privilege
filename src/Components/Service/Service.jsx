import style from "./Service.module.scss";
import borderHight from "../../assets/images/divers/border.svg";

function Service({ name }) {
  return (
    <div>
      <div className={`${style.container}`}>
        <div className={`${style.borderContainer}`}>
          <img src={borderHight} alt="" />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
