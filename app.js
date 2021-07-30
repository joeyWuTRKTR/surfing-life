const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes/index')
const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ extname:'.hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(router)

app.listen(PORT, () => {
  console.log('App is listening on port 3000.')
})