const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/carro1', (req, res) => {
    res.render('carro1')
  })
  
module.exports = router