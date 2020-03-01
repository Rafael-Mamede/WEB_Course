const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Guarda-Roupas', preco: 3000, fragil: false },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(produto) {
    return false
}))

const produtosCaros = produto => produto.preco >= 500
const produtosFrageis = produto => produto.fragil

const produtosCarosEFrageis = produtos.filter(produtosCaros).filter(produtosFrageis)
console.log(produtosCarosEFrageis)