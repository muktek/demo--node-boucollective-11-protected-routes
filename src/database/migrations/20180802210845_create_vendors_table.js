
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

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('vendors')
};
