Object.defineProperty(Array.prototype, 'myForEach', {
    value: function(callBack) {
        for(let i = 0; i < this.length; i++) {
            callBack(this[i], i, this)
        }
    },
    enumable: false,
    writable: false
})

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.myForEach( (nome, indice) => console.log(`${indice + 1}) ${nome}`))