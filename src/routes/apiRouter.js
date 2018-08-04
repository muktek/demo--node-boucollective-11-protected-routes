const Router = require('express').Router

const apiRouter  = Router()


apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/users' : 'Show users',
    '/api/messages' : 'Show messages'
  })
})

apiRouter.get('/vendors', (req, res)=>{
  const db = req.app.locals.db
  db.select('*').from('vendors')
    .then((records)=>{
      res.json(records)
    })
})

apiRouter.get('/vendors/:_id', (req, res)=>{
  const db = req.app.locals.db
  const idInRoute = req.params._id
  console.log(idInRoute);

  db.select('*').from('vendors')
    .where('id', idInRoute)
    .then((records)=>{
      res.json(records[0])
    })
})



apiRouter.get('/messages', (req, res)=>{
  res.json([
    { id: 1, user_id: 2, body: 'Hey Bertha!'},
    { id: 2, user_id: 3, body: 'Hey Steffi!'},
    { id: 3, user_id: 2, body: 'Good to see you'}
  ])
})

module.exports = apiRouter
