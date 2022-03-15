import { heroes } from "../data/Heroes"

 export const getHeroeByName = (name =  '') => {

    if(name.length === 0){
        return [];
    }else{
        
        return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
    }



}