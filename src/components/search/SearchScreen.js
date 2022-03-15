import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import  queryString  from "query-string";
import { getHeroeByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
export const SearchScreen = () => {


  const navigate = useNavigate();
  const location  = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const [formValues, handleInputChange] =    useForm({
    searchText: q,
    
  });
   const {searchText} = formValues;

   const dataHeroes = useMemo( () => getHeroeByName(q),[q]);
   
   //enviar formuario

   const handleSearch = ( e) => 
        
   {
      e.preventDefault();
      console.log(searchText);
      navigate(`?q=${searchText}`);


   }
   return (
    <>


      {
        (q === '') ? <div className="alert alert-success">Buscar heroe</div>
                    : (dataHeroes.length === 0) && <div className="alert alert-danger">no hay resultados con {q}</div>


      }
      <form className="d-flex mt-3" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="text"
          name="searchText"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>



      </form>

      
      {
            dataHeroes.map((heroes) => (
              <HeroCard key={heroes.id}
              
              {...heroes}
              />
            ))
        }
    </>
  );
};
