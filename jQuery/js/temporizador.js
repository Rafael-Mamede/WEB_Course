(function ($){
    function criarElemento(seletor, classe) {
        const newElem = $(`<${seletor}>`)
        newElem.addClass(classe)
        return newElem
    }

    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        const timeArray = []
        for(let i = 0; i < 8; i++) {
            if (i === 2 || i == 5) {
                timeArray.push(criarElemento('span', 'separador').html(':'))
            } else {
                timeArray.push(criarElemento('span', 'digito').html('0'))
            }
            
        }
        timeArray.push(criarElemento('div', 'mensagem').html(opcoesFinais.mensagem))

        $(this).addClass('temporizador')
        $(this).append(timeArray)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        // console.log(horarioAlvo)

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if (diferencaEmMili >= 0) {
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                // console.log(diferenca)

                let pos = 0
                for (let i = 1; i < 4; i++) {
                    for (let j = 0; j < 2; j++) {
                        timeArray[pos === 2 || pos === 5 ? ++pos : pos++].html(diferenca[i][j])
                    }
                }
            } else {
                clearInterval(temporizador)
            }
        }, 1000)

        return this
    }
})(jQuery)