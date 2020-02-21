x=1
y='1'
z = x==y; //true (porque doble igual verifica que sean iguales como string)
a = x===y; //false (porque triple igual verifica que sean del mismo tipo e iguales)


var pato = {
    nombre: 'pato'
}

var otraPato = {
    nombre = 'pato'
}

b= pato==otraPato //falso
c= pato===otraPato // tambien falso

otraPato = pato;

d= pato==otraPato;//verdadero
e= pato===otraPato;//verdadero