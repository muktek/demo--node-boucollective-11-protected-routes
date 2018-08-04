// file created through
//  `knex migrate:make «name-of-db-change»`



// 'up' allows us to change the db schema to something new

//  To enforce the schema changes on the db:
// $ knex migrate:latest
exports.up = function(knex, Promise) {

  return knex
    .schema
    .createTable('vendors', (vendorsTable)=>{

      // Add incremting primary key column
      vendorsTable.increments();

      // Add data columns
      vendorsTable.string('name').notNullable()
      vendorsTable.integer('year_established')
      vendorsTable.string('image_link')
      vendorsTable.boolean('premium_user')
      vendorsTable.timestamps(true, true)

      return vendorsTable
    })

};

// 'down' allows us to reverse changes to db schema

//  To undo the schema changes on the db:
// $ knex migrate:rollback

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('vendors')
};
