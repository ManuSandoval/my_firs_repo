/*let sacha = new Persona ('sacha', 'askdhba',1.80)        //NO OLVIDAR USAR EL NEW
let manu = new Persona ('manuel', 'sandoval',1.79)
let pato = new Persona ('pato', 'lopez',1.81)*/
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`) // clase global, en este caso a windows
    }
    soyAlto() {
        return this.altura > 1.8
    }
}

/*pato.saludar()      //NO OLVIDAR PONER LOS PARENTESIS
pato.soyAlto()*/

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`hola, me llamo ${this.nombre} y soy Desarrollador/a`)
    }
}

