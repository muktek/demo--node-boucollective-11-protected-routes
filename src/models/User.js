const { Model } = require('objection');
const Password = require('../helpers/auth--objection-password.js')();
const _validateModelFields = require('../helpers/auth--objection-validateModelFields.js')



class User extends Password(Model) {

  static get tableName (){
    return 'users'
  }

  $validate(modelInstance){
    _validateModelFields(modelInstance)
    return modelInstance
  }

  static get relationMappings(){
    const Vendor = require('./Vendor.js')

    return {
      vendor : {
        relation: Model.HasOneRelation,
        modelClass : Vendor,
        join : {
          from : 'users.id',
          to : 'vendors.user_id'
        }
      }
    }
  }

}



module.exports = User
