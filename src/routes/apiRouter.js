const Router = require('express').Router

const apiRouter  = Router()


apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/users' : 'Show users',
    '/api/messages' : 'Show messages'
  })
})

apiRouter.get('/users', (req, res)=>{
  res.json([
    {id: 1, name: 'Steffi', age: 25},
    {id: 2, name: 'Adrian', age: 28},
    {id: 3, name: 'Bertha', age: 77}
  ])
})

apiRouter.get('/messages', (req, res)=>{
  res.json([
    { id: 1, user_id: 2, body: 'Hey Bertha!'},
    { id: 2, user_id: 3, body: 'Hey Steffi!'},
    { id: 3, user_id: 2, body: 'Good to see you'}
  ])
})

module.exports = apiRouter
