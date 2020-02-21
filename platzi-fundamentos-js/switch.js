let signo = prompt('Cuál es tu signo?')

switch (signo) {
    case 'acuario':                             //UTILIZA EL ===
        console.log('Acuario debes alalal')
        break;
    case 'piscis':
        console.log('Piscis debes alalal')
        break;
    case 'cancer':
        console.log('Cancer debes alalal')
        break;
    case 'geminis':
        console.log('Géminis debes alalal')
        break;
    case 'Géminis':
        console.log('Géminis debes alalal')
        break;
    default:
        console.log('No se ha ingresado un signo válido')
        break;
}