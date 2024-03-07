import { getHeroeById } from "./bases/08-imp-ex";


/*
const promesa = new Promise( ( resolve, reject ) => {

    setTimeout( () => {
        console.log( '2 segundos después' );
        
        const heroe = getHeroeById(2);
        resolve( heroe );
        //reject( 'no se pudo encontrar el heroe' );
    }, 2000);

});

promesa.then( ( heroe ) => {
    console.log('heroe', heroe);
} )
.catch(err => console.warn( err ));
*/

const getHeroeByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {
            console.log( '2 segundos después' );
            
            const heroe = getHeroeById(id);
            if(!heroe){
                reject( 'No se encontró el héroe' );
            }
            resolve( heroe );
            
        }, 2000);
    
    });
    
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn);