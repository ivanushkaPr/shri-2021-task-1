function renderTemplate(page, theme) {
  return `
  <h1>${page}</h1>$
  <p>${theme}</p>
  `
}

module.exports = renderTemplate;