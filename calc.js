const numberOne = document.getElementById("number1")
const numberTwo = document.getElementById("number2")

const resultado = document.getElementById("resultado")


function calculo (operacao) {
    
    if (operacao === "somar"){
        resultado.textContent = Number (numberOne.value) + Number (numberTwo.value)
    }else if (operacao === "multiplicar") {
        resultado.textContent = Number (numberOne.value) *   Number (numberTwo.value)
    }else if (operacao === "subtrair") {
        resultado.textContent = Number (numberOne.value) - Number (numberTwo.value)
    }else if (operacao === "dividir") {
        resultado.textContent = Number (numberOne.value) / Number (numberTwo.value)
    } else {
        alert ("Não conheço... :0")
    }

}

