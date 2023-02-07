import React from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";

export const Hero = React.memo(({ hero, id }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  );
});
