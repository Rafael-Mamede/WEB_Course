function trocaVetores (vet1 = [], vet2 = []) {
    for (let i = 0; i < vet1.length; i++) {
        vet1[i] = vet2[i] + vet1[i]
        vet2[i] = vet1[i] - vet2[i]
        vet1[i] = vet1[i] - vet2[i]
    }
    console.log(vet1)
    console.log(vet2)
}

vetor1 = [1, 2, 3, 4]
vetor2 = [9, 8, 7, 6]

trocaVetores(vetor1, vetor2)