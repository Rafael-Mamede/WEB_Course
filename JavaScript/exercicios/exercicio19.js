function valorDoPedido(cod, qtd) {
    switch(cod) {
        case 100:
            return 3 * qtd
        case 200:
            return 4 * qtd
        case 300:
            return 5.5 * qtd
        case 400:
            return 7.5 * qtd
        case 500:
            return 3.6 * qtd
        case 600:
            return 2.8 * qtd
        default:
            return 'Código não encontrado!'
    }
}

console.log(valorDoPedido(100, 2))
console.log(valorDoPedido(200, 2))
console.log(valorDoPedido(300, 2))
console.log(valorDoPedido(400, 2))
console.log(valorDoPedido(500, 2))
console.log(valorDoPedido(600, 2))
console.log(valorDoPedido(700, 2))