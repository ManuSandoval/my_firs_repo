/* 
Las promesas
Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas,
que pasaremos como parámetro a Promise.all( arregloDePromesas ), 
Con las promesas podemos encadenar llamadas en paralelo, algo que
no es posible usando callbacks.*/ }
/*VENTAJAS DE USAR PROMESAS:
    Evita caer en el 'infierno de los callbacks'.
    Manejo de errores.
    Calculo de varias promesas a la par.
    Disparar evento cuando termine la llamada asíncrona.
 */
//parametros a pasar al get de jquery
const   API_URL = 'https://swapi.co/api/'
const CHARACTER_URL = 'people/:id'
//le indica a la librería que el request se hará a otra web     
const DATA = {crossDomain: true}

function obtenerPersonaje (id){
    return new Promise((resolve, reject) => {     //NO OLVIDAR QUE ESTOY PASANDO UN CALLBACK (resolve,reject)
        const characterURL = `${API_URL}${CHARACTER_URL.replace(':id', id)}` //reemplazo ':id' por el string '1'
        $   // funciones de jquery jquery. get recibe en el callback function(character) los personajes de star wars de una url (api) de star wars
        .get(characterURL, DATA, function (character) {//el callback se invoca si es exitoso el get, por ende el resolve (promesa) también.
            resolve(character)})    //RESUELVE LA PROMESA enviando un personaje el cual se podrá acceder a traves de Promise.then
        .fail( () => reject(id))      //si falla el get entonecs RECHAZA la promesa y manda un id que se podrá acceder a atraves
    })                                //...de Promise.catch
}

//PARA PROMESAS EN PARALELO
let ids = [1,2,3]
let promesas = ids.map( id => obtenerPersonaje(id))//la arrow f recibe cada uno de los elementos del array
Promise                                                //  y retorna lo que retorne obtenerPersonaje (PROMESAS)
    .all(promesas)  //recorro todas las promesas
    .then(character => console.log(character)) //trato las promesas cumplidas
    .catch(id => console.log(`No se pudo obtener el personaje ${id}`))  //trato el error
/* obtenerPersonaje(1)
    .then(character => {//recibe character
        console.log(`Hola, el personaje 1 es ${character.name}`)
        return obtenerPersonaje(2)
    }).then(character => {//recibe character
        console.log(`Hola, el personaje 2 es ${character.name}`)
        return obtenerPersonaje(3)
    }).then(character => {//recibe character
        console.log(`Hola, el personaje 3 es ${character.name}`)
    })
    .catch(id => {  //recibe id
        console.log(`Sucedió un error al obtener el personaje ${id}`)
    }) */