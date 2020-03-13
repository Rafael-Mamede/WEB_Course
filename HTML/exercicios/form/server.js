const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const arrayForms = []

let id = 0
function setId(obj) {
    if(!obj.id) {
        obj.id = id++
    }
}

app.use(bodyParser.urlencoded( { extended: true } ))

app.post('/Usuarios', (req, resp, next) => {
    const formObj = req.body
    setId(formObj)
    arrayForms.push(formObj)
    console.log(formObj)
    resp.send('Usuário Inserido com sucesso!')
})

app.post('/Usuarios/:id', (req, resp, next) => {
    const formObj = req.body
    const id = Number.parseInt(req.params.id)
    formObj.id = id
    arrayForms.forEach(elem => {
        if(elem.id == id) {
            elem = formObj
        }
        console.log(elem)
    })
    resp.send('Usuário modificado com sucesso!')
})

app.get('/Usuarios/:nome', (req, resp, next) => {
    const nome = req.params.nome
    arrayForms.forEach(elem => {
        if(elem.nome === nome) {
            resp.send(elem)
        }
    })
    resp.send('Elemento não encontrado!')
})

app.listen(3003)