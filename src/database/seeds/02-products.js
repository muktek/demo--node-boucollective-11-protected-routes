const productRows = [
    {name: 'Rainbow Purse',  price: 73 , vendor_id: 2},
    {name: 'Neon See Through Fanny',  price: 27 , vendor_id: 3},
    {name: 'Pronounce Skincare',  price: 43 , vendor_id: 1},
    {name: 'Matcha Specialty Tea',  price: 13 , vendor_id: 1},
    {name: 'Joico Hair Product',  price: 23 , vendor_id: 2},
    {name: 'Parseley Seed Eye Serum',  price: 31 , vendor_id: 3},
    {name: 'Rubber Duck Socks',  price: 12 , vendor_id:  3},
    {name: 'Parseley Seed Eye Serum',  price: 31 , vendor_id: 2},
    {name: 'Kendall Stockton Baby Dress',  price: 65 , vendor_id: 3},
    {name: 'Elyx Bronze Chalice Set',  price: 48 , vendor_id: 1}

]
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert(productRows);
    });
};
