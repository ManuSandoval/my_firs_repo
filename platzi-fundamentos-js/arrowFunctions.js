var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 18,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
  }

/*function esMayorDeEdad(persona) {
    return persona.edad>=18;             //evitar los magic numbers, podríamos declarar una constante 
}*/       

const MAYORIA_DE_EDAD=18

//LAS SIGUIENTES FUNCIONES RECIBEN UNA EDAD Y DEVUELVEN UN BOOLEAN PARA LA CONDICION  DE MAYORIA DE EDAD.
const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD  //ARROW FUNCTIONS, es igual que la funcion de arriba

//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD    //idem

//const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD   //idem, una funcion que recibe un objeto con edad.

const esMenorDeEdad = persona => !esMayorDeEdad(persona)//ESTRUCTURA "loQueRetorna = (loQueRecibe) => loQueHace"
                                                        // si no recibe nada se pone ()
                                //si lo unico que hace es retornar algo se pueden sacar las llaves y el return
function imprimirEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${sacha.nombre} es mayor de edad`)
    }
    else {
        console.log(`${sacha.nombre} es menor de edad`)
    }
}


function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    } if (!esMenorDeEdad(persona)){
        console.log('ACCESO PERMITIDO')
    }
}
