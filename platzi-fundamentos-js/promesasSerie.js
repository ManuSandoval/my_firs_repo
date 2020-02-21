const   API_URL = 'https://swapi.co/api/'
const CHARACTER_URL = 'people/:id'     

const DATA = {crossDomain: true}


function obtenerPersonaje (id){
    return new Promise((resolve, reject) => { 
        const characterURL = `${API_URL}${CHARACTER_URL.replace(':id', id)}` //reemplazo ':id' por el string '1'
        $.get(characterURL, DATA, function (character) {
            resolve(character)
        }).fail( () => reject(id))
    })
}

obtenerPersonaje(1)
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
    })