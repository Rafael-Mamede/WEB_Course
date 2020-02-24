function getInteiroAleatorioEntre({min, max}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = getInteiroAleatorioEntre({min: -1, max: 10})
    console.log(`Opção escolhida: ${opcao}`)
} while(opcao != -1)

console.log('Até a proxima!')