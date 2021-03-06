"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const HtmlReports_1 = require("./reportTargets/HtmlReports");
const Summary_1 = require("./Summary");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtmlReports_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
