const formatarValor = num => `R$${num.toFixed(2).toString().replace('.', ',')}`
console.log(formatarValor(0.1 + 0.2))