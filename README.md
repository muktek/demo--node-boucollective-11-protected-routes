# Auth Notes

### Pre-Configuration
+ have yeoman installed globally

+ have generator-nxko installed globally

+ generate files/folders with nxko
  ```
  yo nxko:react
  ```

+ configure `package.json` scripts
  ```json
  "dev": "npm-run-all --parallel dev:server dev:webpack",
  "dev:webpack": "NODE_ENV=development ./node_modules/.bin/webpack --watch",
  "dev:server": "NODE_ENV=development nodemon server.js --watch src --watch server.js --ignore src/client"
  ```

### Relevant files/folders

+ `server.js` : import + configure:
  + fallback route is
```js

  // React
  app.use((req, res)=>{
    res.render('reactApp.ejs')
  })
```
