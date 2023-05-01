const express = require('../node_modules/express')

const app = express()

app.get('/dados', (req, res) => {

  const dados = [
    {id: 1, nome: 'João'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'José'},
    {id: 4, nome: 'Pedro'},
    {id: 5, nome: 'Paulo'},
  ]

  res.json(dados)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
