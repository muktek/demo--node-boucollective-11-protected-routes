# Auth Notes

### Pre-Configuration
+ create user seed
  - `knex seed:make 00-user`

+ configure seed file to create hashed passwords
  - `src/database/seeds/00-user.js`

+ create migration for foreign key on vendor table
  - `src/database/migrations/20180827215439_put_user_id_fk_on_vendors_table.js`




### Relevant files/folders

+ `server.js` : import + configure:
  + fallback route is

+ `src/middleware/requireAuthentication.js`
  - verify authentication of user

+ `src/middleware/restrictToCurrentUser.js`
  - middleware to limit authentication action to current user

+ `src/routers/apiRouter.js`
  - middleware routes on `.post('/products', ...)`
  - middleware routes on `.put('/products/:_id', ...)`
