"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballMatchReader_1 = require("./FootballMatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var footballMatchReader = new FootballMatchReader_1.FootballMatchReader(csvFileReader);
footballMatchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = footballMatchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log("Match win " + manUnitedWins);
console.log(footballMatchReader.matches);
