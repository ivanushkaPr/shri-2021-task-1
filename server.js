const express = require('express')
const app = express()
const port = 8080;
const renderTemplate = require('./renderTemplate');

app.get('/', (req, res) => {
  res.send(renderTemplate(req.query.slide, req.query.theme));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})