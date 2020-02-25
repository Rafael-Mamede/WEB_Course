function numerosParesImpares (array) {
    let qtdPar = 0, qtdImpar = 0
    for (let i in array) {
        qtdPar += array[i] % 2 == 0 ? 1 : 0
        qtdImpar += array[i] % 2 == 1 ? 1 : 0
    }
    console.log(`${qtdPar} números pares e ${qtdImpar} números ímpares!`)
}

numerosParesImpares([1,2,3,4,5,6,7,8,9,10,12,14,16,19])