import { Cookie } from './cookie.model';
import { Colours } from './colours.enum';

export class SprinkleCookie extends Cookie {
  sprinkleColour: Colours;

  constructor(_name: string) {
    super(_name);
    this.name = _name;
    this.colour = Colours.Brown;
    this.sprinkleColour = Colours.Pink;
    this.chocolateChipNum = 0;
  }
}
