function notasNecessaria(valor) {
    let n100, n50, n10, n5, n1
    if(valor > 100) {
        n100 = Math.floor(valor / 100)
        valor -= n100 * 100
        console.log(`${n100} notas de R$ 100`)
    }
    if(valor > 50) {
        n50 = Math.floor(valor / 50)
        valor -= n50 * 50
        console.log(`${n50} notas de R$ 50`)
    }
    if(valor > 10) {
        n10 = Math.floor(valor / 10)
        valor -= n10 * 10
        console.log(`${n10} notas de R$ 10`)
    }
    if(valor > 5) {
        n5 = Math.floor(valor / 5)
        valor -= n5 * 5
        console.log(`${n5} notas de R$ 5`)
    }
    if(valor > 1) {
        n1 = Math.floor(valor / 1)
        valor -= n1 * 1
        console.log(`${n1} notas de R$ 1`)
    }
}

notasNecessaria(103)
notasNecessaria(2200)