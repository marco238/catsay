// start node server without view engine on port 3008 and reexectute logic on "enter" key
const express = require('express');
const cowsay = require('cowsay');
const say = require('say');
const students = require('./students');

const app = express();
const port = process.env.PORT || 3008;

const avoid = [];


const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else if (key.name === 'return') {
    const randomWord = students[Math.floor(Math.random() * students.length)];
    
    console.log(cowsay.say({
      text : randomWord,
      f: Math.random() > 0.8 ? 'cat' : 'cat2'
    }));
    
    say.speak(randomWord, 'Juan');
    
    avoid.push(randomWord);
    students.splice(students.indexOf(randomWord), 1);
    if (avoid.length > 7) {
      students.push(avoid.shift());
      students.sort((a, b) => a.localeCompare(b))
    }

    console.log(students);
    console.log(avoid);
  }
});

app.listen(port, () => console.log('Press "return" key...'));

