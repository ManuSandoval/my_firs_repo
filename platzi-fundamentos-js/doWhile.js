let contador = 0

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve());


verificarVeces();

function verificarVeces() {
    if (contador==1) {
        console.log(`Fui a ver si llovía una vez`);
    } else {
        console.log(`Fui a ver si llovía ${contador} veces`);
    }
}
