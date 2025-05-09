// Crear Números
const numero1 = 30;  //tienen que ir sin comillas porque sino seria tipo de dato string
const numero2 = 20;
const numero3 = 20.20;
const numero4 = .10213;
const numero5 = -3;

// Otra forma de crear número
const numero8 = new Number(20);

//console.log(numero1)

//OPERACIONES
let resultado

// Suma
resultado = numero1 + numero2;
// Resta
resultado = numero1 - numero2;
// Mult
resultado = numero1 * numero2;
// Division
resultado = numero1 / numero2;
// Modulo
resultado = numero1 % numero2;

//console.log(resultado)


//FUNCIONES MATH
// Pi
resultado = Math.PI;

// redondeo hacia
resultado = Math.round(2.5);

// redondeo abajo o arriba (ceil o floor ) ceil arriba
resultado = Math.ceil(2.2);

// Raiz cuadrada
resultado = Math.sqrt(144);

// Abssoluto
resultado = Math.abs(-300);

// Potencia pow = power
resultado = Math.pow(8, 3);

// Minimo de una serie de valores
resultado = Math.min(3,5,1,2,9,4,2, -3);

// Max de una serie de valores
resultado = Math.max(4,1,21,4,15,5,11,5);

// Aleatorio
resultado = Math.random();

// Aleatorio redondeando hacia arriba
resultado = Math.floor( Math.random() * 30 );

console.log(resultado)


//ORDEN QUE SE EJECUTAN OPERACIONES
//multiplicaciones primero, luego sumas y asi como en la escuela
let resultado3 = 2+5*10; 

//INCREMENTO o DECREMETO
let puntaje = 5;
puntaje++; //5
puntaje--; //5  
++puntaje; //6  USAR ESTA FORMA
--puntaje; //4  USAR ESTA FORMA

puntaje += 3;
puntaje -= 3;

console.log(resultado3)


//Convertir strings a numeros
const numero10 = "20";
const numero6 = "20.2";
const numero7 = "Uno";
const numero9 = 20;

// Convertir de Strings a Números flotantes o Enteros
console.log(Number.parseInt(numero10)); // Convertir de String a Número
console.log(Number.parseFloat(numero6)); // Convertir a número con decimales
console.log(Number.parseInt(numero7)); //no se pueden pasar letras a nuneros

// Revisar si un número es entero
console.log(Number.isInteger(numero9) ); // Revisar si un número es entero o no
console.log(Number.isInteger(numero7) ); //

// Convertir numero a string
console.log(numero4.toString());