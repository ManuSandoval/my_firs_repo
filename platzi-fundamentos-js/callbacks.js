const   API_URL = 'https://swapi.co/api/'
const CHARACTER_URL = 'people/:id'     

const DATA = {crossDomain: true}


function obtenerPersonaje (id, callback){
    const characterURL = `${API_URL}${CHARACTER_URL.replace(':id', id)}` //reemplazo ':id' por el string '1'
    
    $.get(characterURL, DATA, callback).fail( () => {console.log(`No se pudo obtener el personaje ${id}`)} )
}


obtenerPersonaje(1, function (character){ //ES IMPORTANTE QUE SEA LA DECLARACION DE UNA NUEVA FUNCION Y NO LA LLAMADA UNICAMENTE.
    console.log(`Hola, soy ${character.name}`)
    obtenerPersonaje(2, function(character){
        console.log(`Hola, soy ${character.name}`)
        obtenerPersonaje(3, function (character) {
            console.log(`Hola, soy ${character.name}`)
        })
    })
})
