const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const knex = require('knex')
//import objection.Model
const { Model } = require('objection')


const dbConfigObj = require('./knexfile.js')

const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')


const app = express()
const PORT = 3000

const appDb = knex(dbConfigObj.development)
/* configure our database w/ objection model*/
Model.knex(appDb)
app.locals.db = appDb

app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() )


app.use( express.static( `${__dirname}/public` ) )

app.engine( 'ejs', ejs.renderFile )
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use('/api', apiRouter)
app.use('/', pageRouter)


app.use((req, res)=>{
  res.send('<h3> 404 - big error - page no exist</h3>')
})

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
