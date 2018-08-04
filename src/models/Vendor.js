const { Model } = require('objection')

class Vendor extends Model {

  static get tableName(){
    return 'vendors'
  }

  static get relationMappings(){
    const Product = require('./Product.js')

    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join : {
          from : 'vendors.id',
          to: 'products.vendor_id'
        }
      }
    }
  }

}

module.exports = Vendor
