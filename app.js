let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function intentoDeUsuario() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p", `¡Felicidades! Adivinaste el número secreto en ${intentos} ${(intentos===1)?"intento":"intentos"}.`);
    } else {
        if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es mayor. Inténtalo de nuevo.");
        } else {
            asignarTextoElemento("p", "El número secreto es menor. Inténtalo de nuevo.");
        }
        intentos++;
    }
    return;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento("h1", "Juego de Adivinanza");
asignarTextoElemento("p", "Adivina el número entre 1 y 10");
