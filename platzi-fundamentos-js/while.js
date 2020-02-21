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
const comeMucho = () => Math.random() < 0.3
const realizarDeporte = () => Math.random() < 0.4

const PESO_A_BAJAR = 3
const PESO_IDEAL = sacha.peso - PESO_A_BAJAR
let dias = 0

while (sacha.peso > PESO_IDEAL) {
    if (comeMucho()) {
        aumentarDePeso(sacha)
    } 
    if (realizarDeporte()){
        adelgazarPeso(sacha)
    }
    dias++
}

console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} alcanzó el peso ideal`)
