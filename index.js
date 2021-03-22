// Libraries
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

clear();
const divider = Array(40).fill('*').join(' ');
const title = figlet.textSync('H A N G M A N');
const titleColor = chalk.yellow(`${divider}\n${title}\n${divider}`);
console.log(titleColor);
