const fs = require('fs')

console.log('hola');

let numero = 1
let datos = 'desde github codespaces'
fs.writeFile(`fichero${numero}.txt`, datos, (err) => {
  if (err) throw err;
  console.log('The file has been saved!!!!!');
});

