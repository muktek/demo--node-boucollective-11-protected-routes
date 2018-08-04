# Data Access Notes

### Pre-Configuration

- Install Postgres
- Create project database
- Create Role (postgres user) for database

- Install knex + postgres for project

  ```sh
  npm install --save knex pg
  ```


### Relevant files/folders
+ `knexfile.js` : configure knex library with postgres database connection

+ `server.js` : configure db connection, and put it on the request object

  ```js
  const knex = require('knex')
  // ...

  const appDb = knex(dbConfigObj.development)
  app.locals.db = appDb
  ```

+ `src/database/migrations` : we create tables/columns and describe the schema

  ```sh
  knex migrate:make create_products_schema
  ```

+ `src/database/seeds` : we can create 'seed' data for the database

+ `/src/routes/apiRouter` : we can make a query to access data from the database
