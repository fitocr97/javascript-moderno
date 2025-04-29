/*
    ==================== Variables ====================
*/
// existen 3 formas de crear variables en JavaScript, en nuevas versiones solo se utilizan 2

// VAR
var variable = "valor"; //variable inicializada


// LET
let producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

// Incluso a pesar de que la variable se le asigno un valor de tipo string o cadena, puedes asignarle un tipo de dato totalmente diferente
producto = 20;
producto = true;
producto = null;

// También se puede inicializar una variable sin valor y asignarlo después
let disponible;
disponible = true;

// Inicializar múltiples variables
let categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

// Estilos para nombrar variables con más de una palabra
// más de una palabra.
let nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
let nombre_producto = 'Monitor 30 Pulgadas'; //underscore o snake
let NombreProducto = 'Monitor 30 Pulgadas'; // pascal case


//CONST
// primero una variable con const su valor no puede ser re-asignado:
const producto2 = 'Monitor 30 Pulgadas';
console.log(producto2);
producto2 = 'Monitor 23 Pulgadas';

// Por otro lado, las variables con const, deben iniciarse con un valor:
const productoIniciado = 'Monitor 30 Pulgadas';