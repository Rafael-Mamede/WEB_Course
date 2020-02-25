function valorPlano(idade) {
    const valorFixo = 100
    if(idade < 10) {
        return valorFixo + 80
    }
    else if(idade <= 30) {
        return valorFixo + 50
    }
    else if(idade <= 60) {
        return valorFixo + 95
    }
    else if(idade > 60) {
        return valorFixo + 130
    }
    else {
        return 'Idade inválida!'
    }
}

console.log(valorPlano(8))
console.log(valorPlano(30))
console.log(valorPlano(31))
console.log(valorPlano(60))
console.log(valorPlano(61))