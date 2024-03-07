
//Funciones en JS
const saludar = function ( nombre ){
    return `Hola, ${ nombre }`
} 

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`
} 

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => `Hola Mundo`;

console.log( saludar('Jan') );
console.log( saludar2('Juarez') );
console.log( saludar3('Avalos') );
console.log( saludar4());

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'Si',
    });

const user = getUser();
console.log( user );

//Tarea
// 1 transformar en función flecha
// 2 Retornar un objeto implícito
// 3 pruebas

const usuarioActivo =  ( nombre ) => ({
        uid: 'abc',
        username: nombre,
    });


console.log( usuarioActivo( 'Jan' ) );
