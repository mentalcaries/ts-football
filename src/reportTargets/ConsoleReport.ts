import { OutputTarget } from "../utils/types";

export class ConsoleReport implements OutputTarget{
  print(report: string): void {
    console.log(report)  
  }
}