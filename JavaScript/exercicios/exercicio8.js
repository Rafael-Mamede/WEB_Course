function pontuacaoBasquete(lista) {
    const arrayPontuacao = lista.split(' ')
    let qtdRecorde = 0, idPiorPontuacao, menorPontuacao = 150, maiorPontuacao = -1
    for(let i = 0; i < arrayPontuacao.length; i++) {
        if(Number.parseInt(arrayPontuacao[i]) < menorPontuacao){
            menorPontuacao = Number.parseInt(arrayPontuacao[i])
            idPiorPontuacao = i + 1
        }
        if(Number.parseInt(arrayPontuacao[i]) > maiorPontuacao){
            maiorPontuacao = Number.parseInt(arrayPontuacao[i])
            if(i != 0) qtdRecorde++
        }
    }
    return [qtdRecorde, idPiorPontuacao]
}

console.log(pontuacaoBasquete('10 20 20 8 25 3 0 30 1'))