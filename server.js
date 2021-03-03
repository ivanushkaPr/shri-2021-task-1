const express = require('express');
const app = express();
const port = 8080;
const data = require('./data/data');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const dataJSON = data[req.query.slide];
  res.render('index', {theme: req.query.theme ? req.query.theme : 'theme_dark', dataJSON: JSON.stringify(dataJSON)});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})