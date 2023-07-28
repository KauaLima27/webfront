/*


/*
Introdução git e JavaScript



var nome = "Kaua"
let idade = "20"
const anoNascimento = 2003
let idadeEsposa = "20" 

/*
= atribuição 
== comparar se é igual
=== comparar se é exatamente igual


var isOld = true


if (condition) {
    
}




let listaCompras = []

listaCompras.push("Maça")
*/

const titulo = document.getElementById("titulo")
const nomeInput = document.getElementById("nome")
const resultado = document.getElementById("resultado")
const resultadoEmail = document.getElementById("resultadoEmail")
const resultadoTelefone = document.getElementById("resultadoTelefone")
const resultadoEndereco = document.getElementById("resultadoEndereco")


titulo.textContent = "Senai Cotia 2023"

function salvar() {

resultado.textContent = nomeInput.value
resultadoEmail.textContent = email.value
resultadoTelefone.textContent = telefone.value
resultadoEndereco.textContent = endereco.value
    
}