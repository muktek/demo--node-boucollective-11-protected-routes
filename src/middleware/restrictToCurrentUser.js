const restrictToCurrentUser = (req, res, next)=>{
  console.log(req.user.id);
  console.log(req.params._userId);

  if( typeof req.user !== 'object' ||
      req.user.id !== parseInt(req.params._userId)
    ) {
     return res.status(402).send('Unauthorized - Permissions Do Not Exist For unauthenticated user.id ')
  }
  next()
}

module.exports = restrictToCurrentUser
