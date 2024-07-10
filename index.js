const express = require('express')
const app = express()
const port = process.env.Port || 3000
const host = '0.0.0.0'
app.get('/', (req, res) => {
  res.send('Hello Universe!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})