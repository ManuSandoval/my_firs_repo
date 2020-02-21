let manu = {
    nombre : 'manu',
    apellido : 'sandoval',
    edad : 28,
    altura: 1.94
}

let pato = {
    nombre : 'pato',
    apellido : 'lopez',
    edad : 28,
    altura: 1.89
}
let sacha = {
    nombre: 'sacha',
    apellido: 'asdkjasd',
    edad: 28,
    altura: 1.90
}

let uli = {
    nombre: 'uli',
    apellido: 'galati',
    edad: 28,
    altura: 1.75
}

let personas = [manu, pato, sacha, uli]

for (let index = 0; index < personas.length; index++) {
    const persona = personas[index];
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}

//para filtrar
const ES_ALTO = 1.90 
const esAlta = persona => persona.altura >= ES_ALTO

let personasAltas = personas.filter(esAlta)         //USAR filter

console.log(personasAltas)

const esBaja = persona => persona.altura < 1.9
let personasBajas = personas.filter(esBaja)         //USAR filter

console.log(personasBajas)


//transformar arrays  con map: devuelve un nuevo array del array original
const pasarAlturaCms = persona => {
    return {
        ...persona,
        altura: persona.altura*100
        }
}

let personasCms = personas.map(pasarAlturaCms)

console.log(personasCms)


//REDUX 
const reducer = (acum, {edad}) => acum + edad

let totalDeEdad = personas.reduce(reducer, 0)   //INDICE INICIAL

console.log(totalDeEdad)
