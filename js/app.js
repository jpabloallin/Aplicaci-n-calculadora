console.log("hoaaaaa")

function sumar(){
    
    let numero1 = document.getElementById("operandoA").value;
    let numero2 = document.getElementById("operandoB").value;
    let resultado = parseInt(numero1) + parseInt(numero2);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    
    let numero1 = document.getElementById("operandoA").value;
    let numero2 = document.getElementById("operandoB").value;
    let resultado = parseInt(numero1) - parseInt(numero2);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function multiplicar(){
    
    let numero1 = document.getElementById("operandoA").value;
    let numero2 = document.getElementById("operandoB").value;
    let resultado = parseInt(numero1) * parseInt(numero2);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}

function devidir(){
    
    let numero1 = document.getElementById("operandoA").value;
    let numero2 = document.getElementById("operandoB").value;
    let resultado = parseInt(numero1) / parseInt(numero2);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}