import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (

    <div className="col-4 g-4">

      <div className="card text-white bg-dark">
        <img className="card-img-top img-thumbnail" width="300px" height="500px" src={`/assets/${id}.jpg`}  alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">
           {publisher}
          </p>
         
            {
              (alter_ego !== characters) && 
              <p className="card-text">
              {alter_ego}
             </p>

            }
            <Link to={`/hero/${id}`}className="btn btn-primary">Ver más</Link>
        </div>
      </div>
     
    </div>
  );
};
