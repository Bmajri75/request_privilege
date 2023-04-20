import style from "./Service.module.scss";

function Service({ name }) {
  return (
    <div>
      <div className={`${style.container}`}>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Service;
