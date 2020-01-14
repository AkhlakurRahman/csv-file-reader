"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlOutput_1 = require("./teamReport/HtmlOutput");
var WinAnalysis_1 = require("./analyzer/WinAnalysis");
var MatchSummary_1 = require("./MatchSummary");
var FootballMatchReader_1 = require("./FootballMatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var footballMatchReader = new FootballMatchReader_1.FootballMatchReader(csvFileReader);
footballMatchReader.load();
var summary = new MatchSummary_1.MatchSummary(new WinAnalysis_1.WinAnalysis('Liverpool'), new HtmlOutput_1.HtmlOutput());
summary.buildAndPrintReport(footballMatchReader.matches);
