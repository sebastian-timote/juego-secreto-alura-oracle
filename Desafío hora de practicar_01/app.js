let titulo = document.querySelector("h1")
titulo.textContent = "Hora del desafio";

function messageConsole() {
    console.log("el boton fue clicado");   
}
function ciudadDeBrasil() {
    let ciudadBrasil = prompt("ingresa el nombre de una ciudad de brasil");
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti`);    
}
function iLoveJs() {
    alert("yo amo JS");
}
function suma() {
    let numero1 = parseInt(prompt("ingresa un numero"));
    let numero2 = parseInt(prompt("ingresa otro numero"));
    let result = numero1 + numero2;
    alert(`el resultado de la suma entre ${numero1} y ${numero2} es ${result}`);
}