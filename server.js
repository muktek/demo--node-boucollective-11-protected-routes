const express = require('express')
const fs = require('fs-extra')

const app = express()
const PORT = 3000



app.use('/', (req, res)=>{
  fs
    .readFile(`${__dirname}/src/views/home.html`, 'utf-8')
    .then( (htmlData) => {
      res.send(htmlData)
    })

})

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
