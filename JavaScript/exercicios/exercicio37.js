function progressaoAritmetica(n, a1, r) {
    let vetor = [a1], soma
    for (let i = 1; i < n; i++) {
        vetor.push(a1 + i*r)
    }
    soma = (n * (a1 + vetor[vetor.length - 1]) / 2 )
    return { 
        PA: vetor,
        soma
    }
}

function progressaoGeometrica(n, a1, r) {
    let vetor = [a1], soma
    for (let i = 1; i < n; i++) {
        vetor.push(a1 * (r ** i) )
    }
    soma = (a1 * ( (r ** n) - 1)) / (r - 1)
    return {
        PG: vetor,
        soma
    }
}

console.log(progressaoAritmetica(5,1,2))
console.log(progressaoGeometrica(5,1,2))