const Router = require('express').Router
const Vendor = require('../models/Vendor.js')
const Product = require('../models/Product.js')

const apiRouter  = Router()




apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/users' : 'Show users',
    '/api/messages' : 'Show messages'
  })
})

// DATA ACCESS - multiple records from 'vendors' table //
apiRouter.get('/vendors', (req, res)=>{

  Vendor.query()
    .eager('products')
    .then((recordsWithProducts)=>{
      res.status(200).json(recordsWithProducts)
    })

})


// DATA ACCESS - single record from 'vendors' table //
apiRouter.get('/vendors/:_id', (req, res)=>{
  const db = req.app.locals.db

  const idInRoute = req.params._id
  console.log(idInRoute);

  db.select('*').from('vendors')
    .where('id', '=', idInRoute)
    .then((records)=>{
      res.json(records[0])
    })

})


apiRouter.get('/products', (req, res)=>{
  Product.query()
    .eager('vendor')
    .then((recordsWithCompanies)=>{
      res.status(200).json(recordsWithCompanies)
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
