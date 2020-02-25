function notaFinal(nota) {
    if (nota < 38) return nota
    if (nota % 5 > 2) return nota + (5 - (nota % 5))
    else return nota
}

console.log(notaFinal(84))
console.log(notaFinal(38))
console.log(notaFinal(29))