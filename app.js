const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes/index')
const app = express()

app.engine('hbs', exphbs({ extname:'.hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(router)

app.listen(3000, () => {
  console.log('App is listening on port 3000.')
})