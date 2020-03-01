Object.defineProperty(Array.prototype, 'myReduce', {
    value: function(callBack, valorInicial) {
        let acumulador
        if(valorInicial == undefined) {
            acumulador = this[0]
            for(let i = 1; i < this.length; i++) {
                acumulador = callBack(acumulador, this[i], i, this)
            }
        }
        else{
            acumulador = valorInicial
            for(let i = 0; i < this.length; i++) {
                acumulador = callBack(acumulador, this[i], i, this)
            }
        }
        return acumulador
    },
    enumerable: false,
    writable: false
})

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const somaTodos = (acumulador, atual) => { 
    console.log(acumulador, atual)
    return acumulador + atual
}
const resultado = alunos.map(a => a.nota).myReduce(somaTodos)
console.log(resultado)