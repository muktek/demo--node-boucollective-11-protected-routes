const express = require('express')
//STEP A.1 - Import EJS (view templating engine)
const ejs = require('ejs')
const knex = require('knex')

const dbConfigObj = require('./knexfile.js')

const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')


const app = express()

const appDb = knex(dbConfigObj.development)
app.locals.db = appDb

// appDb.select('*').from('vendors')
//   .then((records)=>{
//     console.log(records)
//   })


const PORT = 3000

// STEP - B.1
app.use( express.static( `${__dirname}/public` ) )

// STEP A.2 - Configure EJS as the application
//          view engine
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
