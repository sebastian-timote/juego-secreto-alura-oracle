// let titulo = document.querySelector("h1")
// titulo.textContent = "Hora del desafio";

function holaMundo() {
    return console.log("hola mundo");   
}

function nombre(name) {
    return console.log(`Hola, ${name} `);    
}
function dobleDelNumero(numero) {
    return  numero *2;
}
function promedio(number1, number2 , number3) {
    let result = (number1 + number2 + number3)/3;
    return result;
}
function numeroMayor(number1, number2) {
    if (number1 > number2) {
        return number1;
    }else if (number1 < number2) {
        return number2;
    } else {
        return console.log(`son iguales o no ingreso un numero correcto`);
    }
}
function numeroMultiPorSiMismo(numero) {
    return  numero * numero;
}

holaMundo();
nombre("sebastian");
let dobleNumero = dobleDelNumero(2);
let numberPro = promedio(1,2,3);
let numeroMayor1 = numeroMayor(2,2);
let NumeroXPorSiMismo = numeroMultiPorSiMismo(6);
console.log(dobleNumero ,numberPro ,numeroMayor1 ,NumeroXPorSiMismo);


// let minombre = "sebas";
// console.log(window);

// function nombre() {
//     console.log(minombre);
    
// }
// nombre();

// function apellido() {
//     var miApellido = "timote";
//     console.log(miApellido);//no aparece por que no esta definido en el ambito global

// }
// if (true) {
//     const otraMas = "no sueño mas";
//     console.log(otraMas);
//     otraMas = "no mas";
//     console.log(otraMas);


// }

// apellido();
//console.log(miApellido);//no aparece por que no esta definido en el ambito global

