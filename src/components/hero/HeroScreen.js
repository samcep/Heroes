import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroesById";

export const HeroScreen = () => {
   const navigate =  useNavigate();
  const { id } = useParams();

   

   const hero = useMemo(() => getHeroById(id),[id]);

   const handleReturn  = () => {
      navigate(-1);
   }

  return (
    <div className="card mt-5" >
      <img width="300px" height="500px" src={`/assets/${id}.jpg`} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">
         {hero.superhero}
        </p>
        <p className="card-text">
         {hero.publisher}
        </p>
        <p className="card-text">
         {hero.first_appearance}
        </p>
        <p className="card-text">
         {hero.characters}
        </p>
        <button
          onClick={handleReturn}
          className="btn btn-warning"
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
