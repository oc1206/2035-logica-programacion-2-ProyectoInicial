let numeroSecreto = generarNumeroSecreto();

function intentoDeUsuario() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    console.log("Número secreto generado:", numeroSecreto);
    console.log(typeof numeroSecreto);
    console.log(numeroUsuario);
    console.log(typeof numeroUsuario);
    console.log(numeroUsuario === numeroSecreto);


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
