const Router = require('express').Router;
const fs = require('fs-extra')

const pageRouter = Router()

pageRouter
  .get('/', (req, res)=>{
    var currentYear = ( new Date() ).getFullYear()
    res.render('home.ejs', { copyright: currentYear})
  })


pageRouter
  .get('/about', (req, res)=>{
    res.render('about.ejs')
  })

module.exports = pageRouter
