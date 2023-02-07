import React from "react";
import { Link } from "react-router-dom";
import { HeroCharacters } from "./HeroCharacters";
import "animate.css";

export const HeroItem = React.memo(
  ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    const heroImgUrl = `/assets/heroes/${id}.jpg`;

    return (
      <>
        <div className="col">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4 animate__animated animate__bounce">
                <img src={heroImgUrl} className="card-img" alt={superhero} />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title">{superhero}</h5>
                  <p className="card-text">{alter_ego}</p>
                  <HeroCharacters
                    alter_ego={alter_ego}
                    characters={characters}
                  />
                  <p className="card-text">
                    <small className="text-muted">{first_appearance}</small>
                  </p>
                </div>
                <Link to={`/hero/${id}`}>Más info...</Link>
              </div>
            </div>
          </div>
          {/* <p>Publisher: {hero.publisher}</p>
        <p>Alter_ego: {hero.alter_ego}</p>
        <p>First_appearance: {hero.first_appearance}</p>
        <p>Characters: {hero.characters}</p> */}
        </div>
        {/* <hr /> */}
      </>
    );
  }
);
