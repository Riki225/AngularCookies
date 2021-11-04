import { Colours } from './colours.enum'

export class Cookie {
  name: string;
  colour: Colours;
  chocolateChipNum: number;

  constructor(_name: string) {
    this.name = _name;
    this.colour = Colours.Brown;
    this.chocolateChipNum = 0;
  }
}
