function maiorEMenor (array) {
    array.sort((a,b) => b - a)
    console.log(`Maior elemento: ${array[0]} e menor elemento: ${array[array.length - 1]}`)
}

maiorEMenor([2,5,7,10,3,7,98,23,5,1,67])