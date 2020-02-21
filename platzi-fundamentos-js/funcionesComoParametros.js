class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`) // clase global, en este caso a windows
        if(fn){
            fn(this.nombre, this.apellido, false) //esDev=falso
        }
    }
    soyAlto() {
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        console.log(`hola, me llamo ${this.nombre} y soy Desarrollador/a`)
        if(fn){
            fn(this.nombre, this.apellido, true)  //esDev = true
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log('Ah mirá, no sabía que eras Desarrollador/a')
    }
}

let sacha = new Persona ('sacha', 'askdhba',1.80)        //NO OLVIDAR USAR EL NEW
let manu = new Desarrollador ('manuel', 'sandoval',1.79)
let pato = new Persona ('pato', 'lopez',1.81)

pato.saludar()      //NO OLVIDAR PONER LOS PARENTESIS
manu.saludar(responderSaludo)
sacha.saludar(responderSaludo)