import { HtmlOutput } from './teamReport/HtmlOutput';
import { ConsoleReport } from './teamReport/ConsoleReport';
import { WinAnalysis } from './analyzer/WinAnalysis';
import { MatchSummary } from './MatchSummary';
import { FootballMatchReader } from './FootballMatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');
const footballMatchReader = new FootballMatchReader(csvFileReader);
footballMatchReader.load();

const summary = new MatchSummary(
  new WinAnalysis('Liverpool'),
  new HtmlOutput()
);

summary.buildAndPrintReport(footballMatchReader.matches);
