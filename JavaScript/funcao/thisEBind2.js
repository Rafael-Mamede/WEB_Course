// o this nesse caso, não aponta para o função Pessoa, e sim para a função que chamou ele, que nesse caso é o timer
function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
}
new Pessoa

// aqui o this fica 'amarrado' com a função Pessoa, devido a atribuição de this à const self, no momento em que ela realmente aponta para a função Pessoa
function Pessoa1() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa1