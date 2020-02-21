/*let sacha = new Persona ('sacha', 'askdhba',1.80)        //NO OLVIDAR USAR EL NEW
let manu = new Persona ('manuel', 'sandoval',1.79)
let pato = new Persona ('pato', 'lopez',1.81)*/

function heredaDe(prototipoHijo, prototipoPadre) {
    let fn = function () {}         //supongo que crea un objeto vacío
    fn.prototype = prototipoPadre.prototype //instancia al objeto como proto del padre
    prototipoHijo.prototype = new fn        //instancia al hijo como proto del proto del padre
    prototipoHijo.prototype.constructor = prototipoHijo    //vuelve a asignar el constructor del hijo al hijo
}
function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {       //  //NO USAR ARROW FUNCTIONS PORQUE this. va a apuntar a la 
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)// clase global, en este caso a windows
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

/*pato.saludar()      //NO OLVIDAR PONER LOS PARENTESIS
pato.soyAlto()*/

function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} y soy Desarrollador/a`)
}
