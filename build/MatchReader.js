"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils/utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        const [dateString, homeTeam, awayTeam, homeScore, awayScore, matchResult, referee] = row;
        return [
            (0, utils_1.dateStringtoData)(dateString),
            homeTeam,
            awayTeam,
            parseInt(homeScore),
            parseInt(awayScore),
            matchResult,
            referee
        ];
    }
}
exports.MatchReader = MatchReader;
