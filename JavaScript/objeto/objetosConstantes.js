// pessoa -> endereço de memória -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
pessoa.endereco = 'Rua abc'
console.log(pessoa)

// pessoa -> outro endereço de memória -> {...}
/* pessoa = { nome: 'Ana' }  */

Object.freeze(pessoa)

pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze( {nome: 'Joao'} )
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)