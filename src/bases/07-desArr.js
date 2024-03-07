
const personajes = ['Goku', 'Vegeta', 'Trunks'];

//console.log( personajes[0] );
//console.log( personajes[1] );
//console.log( personajes[2] );

const [ , ,p3 ] = personajes;

console.log( p3 );

const returnArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ]= returnArreglo();
console.log(letras, numeros);

//Tarea
//1 el primer valor del arr se llamará nombre
//2 el otro se llamará setNombre
const usaState = ( valor ) => {
    return [ valor, () => { console.log( 'Hola mundo' ) } ]
}

const [nombre, setNombre] = usaState( 'Goku' );
console.log(nombre);
setNombre();