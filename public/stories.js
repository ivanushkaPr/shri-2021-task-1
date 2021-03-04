window.renderTemplate = function (alias, data) {
  console.log(data)

  return `
  <h1>${alias}</h1>$
  <p>${JSON.stringify(data)}</p>
  `
}


