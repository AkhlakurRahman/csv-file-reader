import { FootballMatchReader } from './refactor-v1/FootballMatchReader';

const footballMatchReader = new FootballMatchReader('football.csv');
footballMatchReader.read();

let manUnitedWins = 0;

for (let match of footballMatchReader.data) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Match win ${manUnitedWins}`);
// console.log(footballMatchReader.data);
