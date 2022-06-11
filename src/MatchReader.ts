import {DataReader, MatchData} from './utils/types';
import {MatchResult} from './MatchResult';
import {dateStringtoData} from './utils/utils';

export class MatchReader {

  matches:MatchData[]=[];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      const [
        dateString,
        homeTeam,
        awayTeam,
        homeScore,
        awayScore,
        matchResult,
        referee,
      ] = row;
      return [
        dateStringtoData(dateString),
        homeTeam,
        awayTeam,
        parseInt(homeScore),
        parseInt(awayScore),
        matchResult as MatchResult,
        referee,
      ];
    });
  }

  // mapRow(row: string[]): MatchData {
  //   const [dateString, homeTeam, awayTeam, homeScore, awayScore, matchResult, referee] =
  //       row;
  //     return [
  //       dateStringtoData(dateString),
  //       homeTeam,
  //       awayTeam,
  //       parseInt(homeScore),
  //       parseInt(awayScore),
  //       matchResult as MatchResult,
  //       referee
  //     ];
  // }
}
