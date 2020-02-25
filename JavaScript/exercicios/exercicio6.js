const regimeSimples = (capitalInicial, txJuros, tempoAplicacao) => capitalInicial + (capitalInicial * txJuros * tempoAplicacao)
const regimeComposto = (capitalInicial, txJuros, tempoAplicacao) => capitalInicial * ( (1 + txJuros) ** tempoAplicacao )

console.log(regimeSimples(1000, 0.1, 3))
console.log(regimeComposto(500000, 0.05, 3))

console.log(regimeSimples(100, 10/100, 2));
console.log(regimeComposto(100, 10/100, 2));
