//Realizar una funcion que determine si un numero es primo o no 
function isPrime(number) {

    if (typeof number != 'number') {
        throw TypeError('el argumento debe ser un numero');
    }
    if (!Number.isInteger(number)) {
        throw TypeError('ingrese un numero entero');
    }

    if (number <= 1) {
        throw TypeError('El argumento debe ser un numero positivo');
    }

    let raiz = Math.floor(Math.sqrt(number)) + 1;
//
    for (let i = 2; i < raiz; i++) {
        if (number % i == 0) {// si existe un numero cuyo modulo = 0
            return console.log('no es un numero primo');
        }
    }
    return console.log('es un numero primo');
}

try {
    console.log(isPrime(6));
} catch (e) {
    console.log(`error:${e.message}`);
}



