const express = require('express')
const ejs = require('ejs')

const bodyParser = require('body-parser')

const knex = require('knex')
const { Model } = require('objection')


// A.1 - Import Auth libraries
const passport = require('passport')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

// A.2- Import configuration functions
const registerLocalStrategy = require('./src/middleware/passport-local--registerLocalStrategy.js')
const { configDeserializeUser, configSerializeUser } = require('./src/helpers/passport-local--sessionActions.js')

const dbConfigObj = require('./knexfile.js')

const pageRouter = require('./src/routers/pageRouter.js')
const apiRouter = require('./src/routers/apiRouter.js')
// A.3- Import configuration functions
const authRouter = require('./src/routers/authRouter')

const app = express()
const PORT = 3000

// ----------------
//A.4a - Configure cookie parser/session libraries + middleware n
app.use( cookieParser() )
app.use( cookieSession({
  name: 'cookiesession',
  secret: 'supercookiesecret',
  httpOnly: true,
  signed: false
}))


//A.3b - Configure passport + session middleware
app.use(passport.initialize())
app.use(passport.session())
passport.use(registerLocalStrategy())
passport.serializeUser(configSerializeUser())
passport.deserializeUser(configDeserializeUser())

const appDb = knex(dbConfigObj.development)
Model.knex(appDb)
app.locals.db = appDb

app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() )


app.use( express.static( `${__dirname}/public` ) )

app.engine( 'ejs', ejs.renderFile )
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

//A.4 - put authRouter on `/auth`
app.use('/auth', authRouter )
app.use('/api', apiRouter)
app.use('/', pageRouter)


app.use((req, res)=>{
  res.render('reactApp.ejs')
})

app.listen(PORT, ()=>{
  console.log('==========================')
  console.log(`App listening on localhost:${PORT}`);
  console.log(`Environment : ${process.env.NODE_ENV}`)
  console.log('==========================')
})
