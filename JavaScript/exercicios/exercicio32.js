function calculaMediaAritmetica (array) {
    let soma = 0
    for (let i in array) {
        soma += array[i]
    }
    return soma / array.length
}

let vetor = [2,3]
console.log(calculaMediaAritmetica(vetor))