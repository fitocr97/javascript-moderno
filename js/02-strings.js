//Los strings o cadenas de texto representan un Texto que se puede asignar a una variable
//nombre cliente categoria

//formas de crear un string
const string1 = "forma 1";
const string2 = String('forma 2');
const string3 = new String('forma 3');

let producto = 'Monitor 20 Pulgadas'; // Utiliza comillas sencillas
const producto2 = "Monitor 20 Pulgadas"; // Utiliza comillas o dobles

// Ejemplo con Pulgadas para poner "
const producto4 = "Monitor 24\"";

console.log(producto)
console.log(producto2)
console.log(producto4)


//METODOS DE STRINGS
producto = 'Monitor 20 Pulgadas ';
precio = '30 USD';

console.log(producto.length); // Conocer la extensión de una cadena, length es de los muy pocos métodos que no usan () y es una propiedad.

// IndexOf
console.log(producto.indexOf("Pulgadas")) // Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto.indexOf('Tablet')); // -1 Significa que no lo pudo encontrar

// Includes()
console.log(producto.includes('Monitor')); // Conocer si un texto existe
console.log(producto.includes('monitor')); // Conocer si un texto existe

// trimStart() trimEnd Elimina todos los espacios en blancos del inicio o al final
console.log(producto.trimStart()); 
console.log(producto.trimEnd()); 

// Los métodos en javaScript se pueden encadenar, es decir, colocarse uno junto al otro
console.log(producto.trimStart().trimEnd() ); // Cortar en ambas direcciones

//trim() Elimina a ambos lados
console.log(producto.trim().length);

// Replace cambia el string por lo que pasemos por atributos
producto = 'Monitor 20 Pulgadas';
console.log(producto.replace("20", "24"));
console.log(producto.replace('Pulgadas', '"'));

// Slice permite extraer una parte de una cadena se le pasa los indices
console.log( producto.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
console.log(producto.slice(8));// Cortar desde el 8 hasta el fin
console.log(producto.slice(2, 10)); // cortar desde 2 hasta el 1
console.log(producto.slice(2,1)); // Si el primer número es mayor, no va a cortar hacia atras...

// Existe uno similar a Slice que se llama substring
console.log( producto.substring(0, 10) );
console.log( producto.substring(2, 1) ); // Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)

// Si has visto algunos sitios web muestran tu primer letra de tu nombre:
const nombre = "Juan";
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0)); //saca la primer letra

// Repeat permite repetir una cadena de texto:
producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);

// Split dividir string en y convitirlo en array (caracter divisor)
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));
const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

// .toUpperCase() texto a todo mayusculas
producto = 'Monitor 24 pulgadas ';
console.log(producto.toUpperCase() );

// .toLowerCase() texto a minusculas
console.log(producto.toLowerCase() );

// .toString() pasar a string
const cantidad = 200;
console.log(cantidad);
console.log(cantidad.toString());