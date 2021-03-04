const express = require('express');
const app = express();
const port = 8080;
const data = require('./data/data');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {data: JSON.stringify(data), slide: req.query.slide, theme: req.query.theme ? req.query.theme : "theme_black"});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})