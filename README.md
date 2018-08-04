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

+ `src/database/migrations` : we create tables/columns and describe the schema

  ```sh
  knex migrate:make create_products_schema
  ```

+ `src/database/seeds` : we can create 'seed' data for the database


+ `server.js` : configure db connection, and put it on the request object

  ```js
  const knex = require('knex')
  // ...

  const appDb = knex(dbConfigObj.development)
  app.locals.db = appDb
  ```

+ `/src/routes/apiRouter` : we can make a query to access data from the database and then we send it back as json
```js
apiRouter.get('/vendors', (req, res)=>{

  // We have access to the knex-db connection on the `req` object
  //    from when we assigned it to app.locals.db in server.js
  const db = req.app.locals.db
  db.select('*').from('vendors')
    .then((dbRecordsReturned)=>{
      res.status(200).json(dbRecordsReturned)
    })
})
```
