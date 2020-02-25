function mediaAnual(cod, notaA, notaB, notaC) {
    let notas = []
    notas.push(notaA, notaB, notaC)
    notas.sort((a,b) => a < b ? 1 : -1)
    let media = ( notas[0]*4 + notas[1]*3 + notas[2]*3 ) / 10
    console.log(`Cod. do aluno: ${cod}. [N1: ${notaA}, N2: ${notaB}, N3: ${notaC}]. Media: ${media}. ${media >= 5 ? 'Aprovado!' : 'Reprovado!' }`)
}

mediaAnual(123, 2.8, 6, 3.5)