const { Model } = require('objection')

class Product extends Model {

  static get tableName(){
    return 'products'
  }

  static get relationMappings(){
    const Vendor = require('./Vendor.js')

    return {
      vendor: {
        relation: Model.BelongsToOneRelation,
        modelClass: Vendor,
        join : {
          from : 'products.vendor_id',
          to: 'vendors.id'
        }
      }
    }
  }

}

module.exports = Product
