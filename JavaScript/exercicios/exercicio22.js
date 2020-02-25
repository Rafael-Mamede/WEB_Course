function valorAnuidade(mes, valor) {
    let mesesAtrasados = 0, mesAtual = mes
    while(mesAtual != 1) {
        mesesAtrasados++
        mesAtual--
    }
    valor = valor * ((1 + 0.05) ** mesesAtrasados)
    console.log(`Anuidade paga no mes ${mes}, logo ${mesesAtrasados} mes(es) esta(ão) atrasados!`)
    console.log(`O valor a ser pago é de: R$ ${valor}`)
}

valorAnuidade(1, 1000)
valorAnuidade(2, 1000)
valorAnuidade(5, 1000)