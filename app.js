const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('hbs', exphbs({ extname:'.hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('App is listening on port 3000.')
})