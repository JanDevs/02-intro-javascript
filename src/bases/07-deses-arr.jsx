const personajes  = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;

console.log( p3 );

const retornaArrego = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArrego();
console.log( letras, numeros);

const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo')}];
}

const [nombre, setNombre ] = useState( 'Goku' );

console.log(nombre);
setNombre();

