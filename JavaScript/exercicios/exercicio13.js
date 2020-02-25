function verificaDiaUtil(dia) {
    switch(dia){
        case 1: 
            return 'Final de semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
        case 7:
            return 'Final de semana'
        default:
            return 'Dia inválido'
    }
}

console.log(verificaDiaUtil(1));
console.log(verificaDiaUtil(2));
console.log(verificaDiaUtil(3));
console.log(verificaDiaUtil(4));
console.log(verificaDiaUtil(5));
console.log(verificaDiaUtil(6));
console.log(verificaDiaUtil(7));
console.log(verificaDiaUtil('dia'));
