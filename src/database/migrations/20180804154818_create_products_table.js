exports.up = function(knex, Promise) {

  return knex
    .schema
    .createTable('products', (productsTable)=>{

      productsTable.increments();

      // Add data columns
      productsTable.string('name').notNullable()
      productsTable.integer('price')
      productsTable.string('image_link')
      productsTable.timestamps(true, true)

      return productsTable
    })

};

// 'down' allows us to reverse changes to db schema

//  To undo the schema changes on the db:
// $ knex migrate:rollback

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('products')
};
