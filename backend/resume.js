const fs = require('fs');


const file = fs.readFileSync('./resume.tex', 'utf-8')
console.log(file)