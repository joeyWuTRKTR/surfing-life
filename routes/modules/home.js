const express = require('express')
const router = express.Router()
// const Surfers = require('../../config/surfers.json')

router.get('/', (req, res) => {
  console.log('home.js connected!')
  res.render('index')
})

module.exports = router