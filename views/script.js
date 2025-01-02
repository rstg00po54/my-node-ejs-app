// script.js

// functions.js

function sum(a, b) {
	return a + b;
  }


// css-utils.js
function cssfunc(file) {
	console.log("cssx "+file)
    return `<link rel="stylesheet" href="${file}.css">`;
}
module.exports = cssfunc


// <!-- <% function css(file) { return `<link rel="stylesheet" href="${file}.css">xxx`; } %> -->