function calculoCrescimento(alturaA, taxaA, alturaB, taxaB) {
    let tempoMinimo
    if(alturaA > alturaB) {
        console.log("A criança A é maior que a criança B!")
        if(taxaA >= taxaB) {
            console.log("A criança B não ultrapassá a criança A.")
        }
        else{
            tempoMinimo = (alturaA - alturaB) / ( alturaB * taxaB )
            console.log(`A criança B ultrapassará a criança A em no mínimo ${tempoMinimo} ano(s)`)
        }
    }
    else if(alturaB > alturaA) {
        console.log("A criança B é maior que a criança A!")
        if(taxaB >= taxaA) {
            console.log("A criança A não ultrapassá a criança B.")
        }
        else{
            tempoMinimo = (alturaB - alturaA) / ( alturaA * taxaA )
            console.log(`A criança A ultrapassará a criança B em no mínimo ${tempoMinimo} ano(s)`)
        }
    }
    else{
        console.log("As crianças possuem atualmente a mesma altura!")
    }
}

calculoCrescimento(100, 0.1, 200, 0)