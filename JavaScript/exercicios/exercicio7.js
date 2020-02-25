function bhaskara(ax2, bx, c) {
    const delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) return 'Delta é negativo'
    else {
        const resultado = []
        const x1 = ( -bx + Math.sqrt(delta) ) / 2 * ax2
        const x2 = ( -bx - Math.sqrt(delta) ) / 2 * ax2
        resultado.push(x1, x2)
        return resultado
    }
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))