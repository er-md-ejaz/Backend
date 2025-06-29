require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/md', (req, res) => {
    res.send('md.com')
})

app.get('/ejaz', (req, res) => {
    res.send('welcome ejaz')
})

port1 = process.env.PORT

app.listen(port1, () => {
  console.log(`Example app listening on port ${port1}`)
})
