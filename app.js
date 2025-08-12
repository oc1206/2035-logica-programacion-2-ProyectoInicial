let valorMaximo = 10;
let numerosSecretos = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


function intentoDeUsuario() {
    if (numeroSecreto === null) {
        asignarTextoElemento("p", "Debes reiniciar el juego para continuar.");
        return;
    }
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p", `¡Felicidades! Adivinaste el número secreto en ${intentos} ${(intentos===1)?"intento":"intentos"}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        limpiarInput();
        if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es mayor. Inténtalo de nuevo.");
        } else {
            asignarTextoElemento("p", "El número secreto es menor. Inténtalo de nuevo.");
        }
        intentos++;
    }
}

function limpiarInput() {
    document.querySelector("#numeroUsuario").value = "";
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*valorMaximo)+1;

    if (numerosSecretos.length == valorMaximo){
        asignarTextoElemento("p", "Todos los números han sido adivinados. Reinicia el juego.");
        document.getElementById("reiniciar").removeAttribute("disabled");
        numerosSecretos = [];
        return null;
    } else {
        if (numerosSecretos.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSecretos.push(numeroGenerado);
            console.log(numerosSecretos);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego de Adivinanza");
    asignarTextoElemento("p", "Adivina el número entre 1 y 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    // Solo deshabilitar el botón si hay números disponibles
    if (numerosSecretos.length < valorMaximo && numeroSecreto !== null) {
        document.getElementById("reiniciar").setAttribute("disabled", "");
    } else {
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
}

function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();
}

asignarTextoElemento("h1", "Juego de Adivinanza");
asignarTextoElemento("p", "Adivina el número entre 1 y 10");
