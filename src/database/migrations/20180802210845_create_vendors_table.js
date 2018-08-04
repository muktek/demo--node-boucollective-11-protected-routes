// file created through
//  `knex migrate:make «name-of-db-change»`


// 'up' allows us to change the db schema to something new
exports.up = function(knex, Promise) {

  return knex
    .schema
    .createTable('vendors', (vendorsTable)=>{

      vendorsTable.increments();

      vendorsTable.string('name').notNullable()
      vendorsTable.integer('year_established')
      vendorsTable.string('image_link')
      vendorsTable.boolean('premium_user')
      vendorsTable.timestamps(true, true)

      return vendorsTable
    })

};

// 'down' allows us to reverse changes to db schema
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('vendors')
};
