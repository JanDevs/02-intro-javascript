//Desestructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man',
};

//const { nombre:nombre2, edad, clave } = persona;

//console.log( nombre2 );

const useContext = ( { clave, nombre, edad, rango = 'Capitán' } ) => {
    //console.log( nombre, edad, rango );
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.4343,
            lng: 32.32323
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );

console.log( nombreClave, anios );
console.log( lat, lng );
