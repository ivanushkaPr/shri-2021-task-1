function renderTemplate(alias, data) {
  return `
  <h1>${alias}</h1>$
  <p>${data}</p>
  `
}

module.exports = renderTemplate;