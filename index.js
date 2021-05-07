const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { sequelize } = require('./database');

sequelize.sync().then(() => {
  console.log("db is synced");
});

const app = express();

app.use(bodyParser.json());
app.use('/api/v1', routes);

app.use('*', function (req, res) {
  res.send("app is running");
});

app.listen(3001, 'localhost', () => {
  console.log("server listning on 8081")
});
