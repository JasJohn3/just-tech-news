const express = require('express')
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//turn on routes
app.use(routes);

// connect to the db and server

sequelize.sync({force:true})
.then(()=>{
  app.listen(PORT,()=> console.log(`Now Listening on Port: ${PORT}`))
});
