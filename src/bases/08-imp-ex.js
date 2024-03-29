import heroes, { owners } from "../data/heroes";

//console.log( owners );

//find
const getHeroeById = ( id ) => {
    return heroes.find( ( heroe ) => heroe.id === id );
    
}

//console.log( getHeroeById(2) );

//filter
const getHeroesByOwner = (owner) => {
    return heroes.filter( ( heroe ) => heroe.owner === owner );
}

export{
    getHeroeById,
    getHeroesByOwner
}

//console.log( getHeroesByOwner( 'DC' ) );

