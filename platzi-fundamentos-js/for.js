let sacha = {
    nombre: 'sacha',
    apellido: 'asdkjasd',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kgs`)

const DIAS_DEL_AÑO = 365
const VARIACION_PESO = 0.2
const aumentarDePeso = sacha => sacha.peso += VARIACION_PESO;

const adelgazarPeso = sacha => sacha.peso -= VARIACION_PESO;

for (let index = 1; index <= DIAS_DEL_AÑO; index++) {
    let random = Math.random(); //devuelve numeros decimales random entre 0-1
    if (random < 0.25) {
        aumentarDePeso(sacha); //aumenta de peso
    }
    else if (random < 0.5) {
        adelgazarPeso(sacha);
    }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kgs`)    //toFixed para limitar los decimales.

