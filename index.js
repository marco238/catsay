const cowsay = require('cowsay');

const students = [
  'Carmen',
  'Eduard',
  'Idoia',
  'Ignacio',
  'Juan',
  'Julián',
  'Marek',
  'Marina L',
  'Marina B',
  'Mer',
  'Nahum',
  'Violeta',
];

console.log(cowsay.say({
  text : students[Math.floor(Math.random() * students.length)],
  f: Math.random() > 0.8 ? 'cat' : 'cat2'
}));
