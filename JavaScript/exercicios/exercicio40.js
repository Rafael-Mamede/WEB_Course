function conceito(nota = 0.0) {
    if (nota >= 0.0 && nota < 5) console.log("Conceito: D.")
    else if (nota >= 5 && nota < 7) console.log("Conceito: C.")
    else if (nota >= 7 && nota < 9) console.log("Conceito: B.")
    else if (nota >= 9 && nota < 10.0) console.log("Conceito: A.")
    else console.log("Nota inválida!")
}

conceito(3.5)
conceito(9.4)
conceito(7)
conceito('nota')