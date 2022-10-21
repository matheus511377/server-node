const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
var cors = require('cors')
const port = process.env.PORT || 8000 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.json({ hello: 'world'})
})

app.post('/users', (req, res) => {
  let bodyWithoutPassword = { ... req.body }
  delete bodyWithoutPassword.password
  console.log(bodyWithoutPassword);
  res.json(req.body)
});

app.listen(port);
