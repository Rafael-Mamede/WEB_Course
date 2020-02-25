function calcula(a, operacao, b){
    switch(operacao){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'Operação inválida!'
    }
}

console.log(calcula(2, '+', 3));
console.log(calcula(2, '-', 3));
console.log(calcula(2, '*', 3));
console.log(calcula(2, '/', 3));
console.log(calcula(2, 'ou', 3));