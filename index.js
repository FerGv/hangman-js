// Libraries
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');

const human = require('./human');

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
  const discoveredLetters = [];
  let errors = 0;

  const wordSpaces = logMultiplier(SECRET_WORD_LENGTH, '_');
  console.log(`\nSECRET WORD: ${wordSpaces}\n`);

  do {
    let { letter } = await inquirer.prompt([
      {
        name: 'letter',
        message: 'Ingresa una letra: ',
      },
    ]);
    letter = letter.toLowerCase();

    if (SECRET_WORD.includes(letter)) {
      if (discoveredLetters.includes(letter)) {
        console.log(chalk.red('\nLETRA REPETIDA.'));
        errors += 1;
        console.log(chalk.red(`\n${human[errors]}`));
      }

      discoveredLetters.push(letter);
    } else {
      console.log(chalk.red('\nLETRA ERRÓNEA.'));
      errors += 1;
      console.log(chalk.red(`\n${human[errors]}`));
    }

    if (errors === 6) {
      const loserMessage = figlet.textSync('YA PERDISTE : c');
      console.log(chalk.red(`\n${loserMessage}`));
      break;
    }

    const secretWithDiscovered = Array.from(SECRET_WORD).map((letter) =>
      discoveredLetters.includes(letter) ? letter : '_',
    );

    console.log(`\nSECRET WORD: ${secretWithDiscovered.join(' ')}\n`);

    if (secretWithDiscovered.join('') === SECRET_WORD) {
      const loserMessage = figlet.textSync('YA GANASTE c :');
      console.log(chalk.green(`\n${loserMessage}`));
      break;
    }
  } while (true);
}

main();
