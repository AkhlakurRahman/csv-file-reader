import { FootballMatchReader } from './FootballMatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');
const footballMatchReader = new FootballMatchReader(csvFileReader);
footballMatchReader.load();

let manUnitedWins = 0;

for (let match of footballMatchReader.matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Match win ${manUnitedWins}`);
console.log(footballMatchReader.matches);
