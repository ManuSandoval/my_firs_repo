const   API_URL = 'https://swapi.co/api/'
const CHARACTER_URL = 'people/:id'     

const DATA = {crossDomain: true}

const onCharacterResponse = function (character) {
    console.log(`Hola soy ${character.name}`)
}

function obtenerPersonaje (id){
    const characterURL = `${API_URL}${CHARACTER_URL.replace(':id', id)}` //reemplazo ':id' por el string '1'
    $.get(characterURL, DATA,onCharacterResponse) 
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)