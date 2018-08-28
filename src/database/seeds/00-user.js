
const Bcrypt = require('bcryptjs')

const RECOMMENDED_ROUNDS = 12

const dataRows = [
  {id: 1, email: 'test_user_1@mail.com', password: Bcrypt.hashSync('pw111' , RECOMMENDED_ROUNDS)},
  {id: 2, email: 'test_user_2@mail.com', password: Bcrypt.hashSync('pw222' , RECOMMENDED_ROUNDS)},
  {id: 3, email: 'test_user_3@mail.com', password: Bcrypt.hashSync('pw333' , RECOMMENDED_ROUNDS)},
]


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(dataRows);
    });
};
