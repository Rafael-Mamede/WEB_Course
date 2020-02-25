function numerosNoIntervalo(array) {
    let qtdDentro = 0, qtdFora = 0
    for(let i in array) {
        if (array[i] >= 10 && array[i] <= 20) {
            qtdDentro++
        } else {
            qtdFora++
        }
    }
    console.log(`${qtdDentro} números dentro do intervalo e ${qtdFora} números fora do intervalo!`)
}

numerosNoIntervalo([1,2,3,11,12,20,10,21,29])