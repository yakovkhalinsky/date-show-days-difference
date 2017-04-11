const ReadLine = require('readline');
const readLine = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const { parse, validate } = require('./src/date');

main();

function main() {
  intro();
  getDates();
}

function getDates() {
  readLine.question('Enter your dates: ', (datesString) => {
    if (datesString) {
      const daysDifference = parse.getDaysDifference(datesString);
      console.log(`${datesString}, ${daysDifference}`);
      readLine.close();
    } else {
      console.log('Invalid input, please try again');
      getDates();
    }
  });
}

function intro() {
  console.log('---------------------------------------\n');
  console.log('  Show me how many days between dates\n');
  console.log('---------------------------------------');
  console.log('- Dates must be between the years 1900 and 2010.');
  console.log('- Dates must be separated by a comma.');
  console.log('E.g. 01 07 2000, 31 10 2001\n');
}
