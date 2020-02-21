var nombre = 'Sacha', apellido = 'Deniro', edad = 28;

var nombreEnMay = nombre.toUpperCase();
var apellidoEnMin = apellido.toLowerCase();
var primerLetraNombre = nombre.charAt(0);
var cantidadLetrasNombre = nombre.length
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
var usuario = 'manuel'
var ultimaLetra = usuario.substr((usuario.length) - 1);

edad+=1;

var peso = 75
peso-=2;
var pesoSandwich = 1
peso = peso + pesoSandwich;

var precioVino = 200.3;
var total = Math.round(precioVino*3);
var totalStr = total.toFixed(2);
var total2 = parseFloat.(totalStr);
console.log('hola ' + nombre + ' ' + apellido + ' ' + edad);
