const express = require('express')
const ejs = require('ejs')

// Import knex
const knex = require('knex')
// Import knexfile.js config
const dbConfigObj = require('./knexfile.js')

const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')


const app = express()

/* Data Access Config */
const appDb = knex(dbConfigObj.development)
app.locals.db = appDb

// // Test to see that data access works
// appDb.select('*').from('vendors')
//   .then((records)=>{
//     console.log(records)
//   })


const PORT = 3000

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
