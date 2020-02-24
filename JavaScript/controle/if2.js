function teste1(num) {
    if(num > 7)
        console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)

const teste2 = function(num) {
    if(num > 7); {  // cudiado com ';', não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)