import {Analyzer, MatchData, OutputTarget} from './utils/types';

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]):void{
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}
