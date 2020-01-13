"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballMatchReader_1 = require("./refactor-v1/FootballMatchReader");
var footballMatchReader = new FootballMatchReader_1.FootballMatchReader('football.csv');
footballMatchReader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = footballMatchReader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log("Match win " + manUnitedWins);
// console.log(footballMatchReader.data);
