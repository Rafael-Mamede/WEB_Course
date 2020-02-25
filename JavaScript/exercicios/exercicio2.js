function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ( (ladoA === ladoB) && (ladoB == ladoC) ) {
        return 'Equilátero'
    }
    else if ( (ladoA == ladoB) || (ladoB == ladoC) || (ladoA == ladoC) ) {
        return 'Isósceles'
    }
    else {
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));