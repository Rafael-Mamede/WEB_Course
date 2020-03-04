const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const funcionarioChines = funcionario => funcionario.pais === 'China' 
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = (anterior, atual) => anterior.salario < atual.salario ? anterior : atual

axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionariaChinesaComMenorSalario = funcionarios.filter(funcionarioChines).filter(mulheres).reduce(menorSalario)
    console.log(funcionariaChinesaComMenorSalario)
})