var Manu = {
    nombre : 'manu',
    apellido : 'sandoval',
    edad : 28
}

var Pato = {
    nombre : 'pato',
    apellido : 'lopez',
    edad : 28
}


function imprimirEdad(persona) {
    console.log(`${persona.nombre} tiene ${persona.edad} años`)
}

// var nombre = persona.nombre esIgualA var {nombre} = persona
function imprimirNombre({nombre}) {    //recibe solo el atributo especificado
    console.log(`${nombre}`)
}

imprimirNombreYEdad(Pato);

imprimirEdad(Pato);
imprimirNombre(Manu);
imprimirNombre ({nombre : 'roberto'})  //pasa el objeto desglosado

function imprimirNombreYEdad(persona) {
    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`)
}

function cumplirAños(persona) { // LOS OBJETOS SE PASAN POR REFERENCIA!
    persona.edad += 1;
}

function cumpleaños(edad) {     // los atributos NO se pasan por referencia!
    edad += 1;
}

function cumplirAños(persona) { // LOS OBJETOS SE PASAN POR REFERENCIA!
    return{
        ...persona,                 //los tres puntos sirven para expandir elementos de un elemento iterable
        edad: persona.edad + 1      //en este caso sirven para no editar el objeto original
    }
}

function myFunc(x, y, ...params) { // used rest operator here
    console.log(x);
    console.log(y);
    console.log(params);
  }
  
  var inputs = ["a", "b", "c", "d", "e", "f"];
  myFunc(...inputs); // manda inputs pero por separado, de alguna manera que acepte la funcion invocada.
  // "a"
  // "b"
  // ["c", "d", "e", "f"]

function myFunc(a, b, ...args) {//los tres puntos tambien marcan que puede incluir una cantidad "ilimitada" de parametros antes.
    console.log(a); // 22
    console.log(b); // 98
    console.log(args); // [43, 3, 26]
   };
   myFunc(22, 98, 43, 3, 26);

function myFunc2(...[x, y, z]) {//los parametros de resto son desestructurados (solo matrices), lo que significa que sus datos pueden descomprimirse en distintas variables 
    console.log(x * y* z);
  }
  
  myFunc2(1,2)          // NaN
  myFunc2(1, 2, 3)    // 6
  myFunc2(1, 2, 3, 4) // 6 (el cuarto parametro no lo tiene en cuenta, no rompe el array)

//EJ
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg pizza', ...specialty]; //sin los puntos no extrae los elementos del array, por ende los tres puntos sirven para unir arrays

console.log(pizzas); // 'Deep Dish', 'Pepperoni', 'Hawaiian', 'veg pizza', 'Meatzza', 'Spicy Mama', 'Margherita'


/*EJ: Con el operador de propagación, la clonación superficial (excluyendo el prototipo) o la fusión de objetos 
ahora es posible utilizando una sintaxis más corta que Object.assign ().*/
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
