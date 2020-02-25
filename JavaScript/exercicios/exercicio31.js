function quantidadeNumNegativos (array) {
    return array.length
}

function retornaQtdNegativos (array) {
    let negativos = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            negativos.push(array[i])
        }
    }
    return quantidadeNumNegativos(negativos)
}
let vetor = [-1,-2,6,5,4,2,-1,-10,-4]
console.log(retornaQtdNegativos(vetor))