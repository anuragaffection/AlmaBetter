// const chalk = require('chalk');
import chalk from 'chalk';


// Different styling options
console.log(chalk.blue('This text will be blue'));
console.log(chalk.red.bold('This text will be red and bold'));
console.log(chalk.green.underline('This text will be green and underlined'));

// Combining styles
console.log(chalk.yellow.bgBlue.bold('Yellow text on blue background and bold'));

// Using RGB values for colors
console.log(chalk.rgb(255, 136, 0)('Text with RGB color'));


// giving error here, run it again 
