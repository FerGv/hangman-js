// Libraries
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');

function logMultiplier(number, symbolFill = '*', symbolJoin = ' ') {
  return Array(number).fill(symbolFill).join(symbolJoin);
}

async function main() {
  clear();
  const divider = logMultiplier(40);
  const title = figlet.textSync('H A N G M A N');
  const titleColor = chalk.yellow(`${divider}\n${title}\n${divider}`);
  console.log(titleColor);

  const SECRET_WORD = 'curtain';
  const SECRET_WORD_LENGTH = SECRET_WORD.length;

  const wordSpaces = logMultiplier(SECRET_WORD_LENGTH, '_');
  console.log(wordSpaces);

  const answers = await inquirer.prompt([
    {
      name: 'letter',
      message: 'Ingresa una letra: ',
    },
  ]);
  console.log(answers);
}

main();
