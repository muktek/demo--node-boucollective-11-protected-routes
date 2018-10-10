const User = require("../models/User")
const Product = require('../models/Product')

const restrictActionToCurrentUser = async  (req, res, next)=>{
   // user on request's session
  const userInSession = req.user
  const productToModify = req.body



  //fetch product
  const productRecord =  await Product.query()
    .findById(req.params._id)

  //fetch user WITH vendor information
  const userRecordWithVendor = await User.query()
    .findById(userInSession.id)
    .eager('vendor')

  console.log(productRecord);

  /// check that user's vendor id is same as product.vendor_id
  if( typeof userRecordWithVendor === 'undefined' ||
      typeof productRecord === 'undefined' ||
      typeof userRecordWithVendor.vendor !== 'object' ||
      userRecordWithVendor.vendor.id !== productRecord.vendor_id
    ) {
     return res.status(402).send('Unauthorized - Permissions Do Not Exist For unauthenticated user.id ')
  }

  next()
}

module.exports = restrictActionToCurrentUser
