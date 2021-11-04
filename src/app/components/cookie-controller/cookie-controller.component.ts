import { Component, OnInit } from '@angular/core';
import { Cookie } from '../../models/cookie.model';
import { SprinkleCookie } from '../../models/sprinkle.model';
import { Colours } from '../../models/colours.enum';

@Component({
  selector: 'cookieController',
  templateUrl: './cookie-controller.component.html',
  styleUrls: ['./cookie-controller.component.css']
})
export class CookieControllerComponent implements OnInit {
  public Colours = Colours;
  newCookieType: string;
  newCookieName: string;
  cookieSelected: Cookie;
  newCookieColour: Colours;

  cookieList: Cookie[] = [];

  addChocChip() {
    this.cookieSelected.chocolateChipNum++;
  }
  removeChocChip() {
    this.cookieSelected.chocolateChipNum--;
  }

  removeCookie() {
    let deleteIndex = this.cookieList.indexOf(this.cookieSelected);
    this.cookieList.splice(deleteIndex, 1);
    if (this.cookieList.length > 0) {
      this.cookieSelected = this.cookieList[deleteIndex - 1];
    }
  }

  newCookie() {
    if (this.newCookieType === 'Cookie') {
      this.cookieList.push(new Cookie(this.newCookieName));
    } else {
      this.cookieList.push(new SprinkleCookie(this.newCookieName));
    }
    if (this.cookieList.length === 1) {
      this.cookieSelected = this.cookieList[0];
    }
  }

  constructor() {}

  ngOnInit() {
    this.newCookieType = 'Cookie';
    this.newCookieName = 'new cookie name';
    this.cookieSelected = new Cookie('');
    this.newCookieColour = this.cookieSelected.colour;
  }
}
