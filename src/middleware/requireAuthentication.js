const requireAuthentication = (req, res, next) =>{

    if(typeof req.user === 'undefined'){
      return res.status(403).send('Action not authorized')
    }
   next()
}

module.exports = requireAuthentication
