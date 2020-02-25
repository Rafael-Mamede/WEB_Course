const soma = (a, b) => a + b
const subtracao = (a, b) => a - b
const multiplicacao = (a, b) => a * b
const divisao = (a, b) => a / b

function calcula(valor1, valor2, operacao) {
    return operacao(valor1, valor2)
}

console.log(calcula(2, 2, soma))
console.log(calcula(2, 2, subtracao))
console.log(calcula(2, 3, multiplicacao))
console.log(calcula(6, 2, divisao))