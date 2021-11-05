const express = require('express')
const app = express()
require('dotenv').config();

// Api Port
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json('Api Working')
})

app.listen(PORT, () => {
  console.log(`Api running on ${PORT}`)
})