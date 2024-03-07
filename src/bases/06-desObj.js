
//Desestructuración
//Asignación desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

//const { nombre, edad, clave } = persona;
//const { nombre:nombre2 } = persona;

//console.log( nombre );
//console.log( persona.edad );
//console.log( edad );
//console.log( clave );
//console.log( persona.clave );

const context = ( { clave, nombre, edad, rango = 'Capitán' } ) => {
    
    //console.log(nombre, edad);

    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 14.12,
            lng: 4.21,
        }
    }

}
const { nombreClave, anios, lating:{ lat, lng } } = context( persona );
console.log( nombreClave, anios );
console.log( lat, lng);