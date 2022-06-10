import { CsvFileReader } from "./CsvFileReader";
import { MatchData } from "./utils/types";
import { MatchResult } from "./MatchResult";
import { dateStringtoData } from "./utils/utils";

export class MatchReader extends CsvFileReader<MatchData>{
  mapRow(row: string[]): MatchData {
    const [dateString, homeTeam, awayTeam, homeScore, awayScore, matchResult, referee] =
        row;
      return [
        dateStringtoData(dateString),
        homeTeam,
        awayTeam,
        parseInt(homeScore),
        parseInt(awayScore),
        matchResult as MatchResult,
        referee
      ];
  }
}