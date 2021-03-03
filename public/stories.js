window.renderTemplate = function (alias, data) {
  return `
  <h1>${alias}</h1>$
  <p>${data.data.title}</p>
  `
}


