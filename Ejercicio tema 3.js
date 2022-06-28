// Primera parte:

// Crear una función con tres parámetros que sean números que se suman entre sí.

// Llamar a la función en el main y darle valores.

const sumarLos3 = (a,b,c) => a+b+c;

sumarLos3(4,5,6)



// Segunda parte:

// Crear una clase coche.

// Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

// Una función que incremente el número de puertas que tiene el coche.

// Crear un objeto miCoche en el main y añadirle una puerta.

// Mostrar el número de puertas que tiene el objeto.

class Coche{
    constructor(puertas){
        this.puertas = puertas;
    }
        unaPuertaMas(PuertasAdicionales){
        this.puertas+=PuertasAdicionales;
        }
} 

const miCoche = new Coche (4);
miCoche.unaPuertaMas(1);
return miCoche.puertas;