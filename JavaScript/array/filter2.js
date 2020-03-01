Object.defineProperty(Array.prototype, 'myFilter', {
    value: function(callBack) {
        const newArray = []
        for(let i = 0; i < this.length; i++) {
            if (callBack(this[i], i, this)) newArray.push(this[i])
        }
        return newArray
    },
    enumerable: false,
    writable: false
})

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Guarda-Roupas', preco: 3000, fragil: false },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

const produtosCaros = produto => produto.preco >= 500
const produtosFrageis = produto => produto.fragil

const produtosCarosEFrageis = produtos.myFilter(produtosCaros).myFilter(produtosFrageis)
console.log(produtosCarosEFrageis)