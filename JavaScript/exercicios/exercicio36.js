function multiplicacaoEscalar (vetor, escalar) {
    let novoVetor = []
    for (let i = 0; i < vetor.length; i++) {
        novoVetor[i] = vetor[i] * escalar
    }
    return novoVetor
}

function multiplicacaoEscalarComRestricao (vetor, escalar) {
    let novoVetor = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5 ) {
            novoVetor[i] = vetor[i] * escalar
        } else novoVetor[i] = vetor[i]
    }
    return novoVetor
}

let vet1 = [1,2,3,4,5,6,7,8,9,10]
console.log(multiplicacaoEscalar(vet1, 2))
console.log(multiplicacaoEscalarComRestricao(vet1, 2))