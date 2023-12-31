import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import './styles/CardResident.css'
const CardResidents = ({ url }) => {
  const [resident, getResident] = useFetch(url);

  useEffect(() => {
    getResident();
  }, []);

  

  return (
    <article className="resident">
      <header className="resident__header">
        <img className="resident__img" src={resident?.image} alt="" />
        <div className="resident__status">
          <div className={`resitent__status-circle ${resident?.status}`}></div>
          <span className="resident__status-value">{resident?.status}</span>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{resident?.name}</h3>
        <hr className="resident__hr"/>
        <ul className="resident__stats">
          <li className="resident__stat-item">
            <span className="resident__stat-label">Specie </span>
            <span className="resident__stat-value">{resident?.species}</span>
          </li>
          <li className="resident__stat-item">
            <span className="resident__stat-label">Origin </span>
            <span className="resident__stat-value">{resident?.origin.name}</span>
          </li>
          <li className="resident__stat-item">
            <span className="resident__stat-label">Eppisodes where appear </span>
            <span className="resident__stat-value">{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default CardResidents;
