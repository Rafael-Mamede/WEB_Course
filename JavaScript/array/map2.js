const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços
function toObject(json) {
    return JSON.parse(json)
}

function onlyPrices(obj) {
    return obj.preco
}

function toReal(value) {
    return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`
}

const precos = carrinho.map(toObject).map(onlyPrices).map(toReal)
console.log(precos)