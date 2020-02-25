function imparesNoIntervalo(inicio = 0, fim = 100) {
    if (inicio > fim){
        let aux = inicio
        inicio = fim
        fim = aux
        delete aux
    }
    let impares = []
    for (let i = inicio + 1; i < fim; i++) {
        if ( i % 2 == 1){
            impares.push(i) 
        }
    }
    console.log(impares)
}

imparesNoIntervalo()
imparesNoIntervalo(10,2)
imparesNoIntervalo(5,100)