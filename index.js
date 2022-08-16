const cowsay = require('cowsay');
const say = require('say')

const students = [
  'Carmen',
  'Eduard',
  'Idoia',
  'Ignacio',
  'Juan',
  'Julián',
  'Márek',
  'Marina L',
  'Marina',
  'Mer',
  'Nahum',
  'Violeta',
];

const randomNumber = Math.random();
const randomWord = students[Math.floor(randomNumber * students.length)]
console.log(cowsay.say({
  text : randomWord,
  f: randomNumber > 0.8 ? 'cat' : 'cat2'
}));
say.speak(randomWord, 'Juan');
