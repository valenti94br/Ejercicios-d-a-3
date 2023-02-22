// 1.Funciones
// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.

function resta(a, b) {
    return a - b
}
console.log(resta(14, 7))

// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

function nota() {
    let pregunta = prompt("¿Cual es mi calificación?")
    switch (+pregunta) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            resultado = "Insuficiente";
            break;
        case 5:
        case 6:
            resultado = "Suficiente";
            break;
        case 7:
        case 8:
            resultado = "Notable";
            break;
        case 9:
        case 10:
            resultado = "Sobresaliente";
            break;

        default: "Debe introducir una nota"
            break;
    }
    return resultado
}
console.log(nota())

// Este es el método que me enseñó Paco, es lo mismo pero agrupa por rangos para poder trabajar con un volumen de datos mayor

function nota() {
    let pregunta = prompt("¿Cual es mi calificación?")
    let preguntaInt = parseInt(pregunta)
    switch (true) {
        case pregunta <= 4:
            resultado = "Insuficiente";
            break;
        case pregunta <= 6:
            resultado = "Suficiente";
            break;
        case pregunta <= 8:
            resultado = "Notable";
            break;
        case pregunta <= 10:
            resultado = "Sobresaliente";
            break;

        default:
            resultado = "Debe introducir una nota"
            break;
    }
    return resultado
}
console.log(nota())

// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

function duplicaNumero(numero) {
    if (typeof numero === "number") {
        return numero * 2
    } else {
        return "Debo ser ejecutada con un número";
    }
}

console.log(duplicaNumero("10"))

// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial(string) {
    if (typeof string != "string") {
        return "Debo ser ejecutada con un string";
    } else if (string == "") {
        return "Debo ser ejecutada con un string no vacío"
    } else {
        return string[0]
    }
}

console.log(caracterInicial(""))

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un strin7g vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(string) {
    if (typeof string != "string") {
        return "Debo ser ejecutada con un string";
    } else if (string == "") {
        return "Debo ser ejecutada con un string no vacío"
    } else {
        return string.slice(-1)
    }
}

console.log(ultimoCaracter("Hola"))

