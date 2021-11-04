import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Cookie } from '../../models/cookie.model';
import { SprinkleCookie } from '../../models/sprinkle.model';
import { Colours } from '../../models/colours.enum';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'cookie-selector',
  templateUrl: './cookie-selector.component.html',
  styleUrls: ['./cookie-selector.component.css']
})
export class CookieSelectorComponent implements OnInit {
  public Colours = Colours;
  @Input() cookieList:Cookie[];
  @Input() cookieSelected:Cookie;

  constructor() { }

  addChocChip(){
    this.cookieSelected.chocolateChipNum++;
  }
  removeChocChip() {
    this.cookieSelected.chocolateChipNum--;
  }

  removeCookie() {
    let deleteIndex = this.cookieList.indexOf(this.cookieSelected);
    this.cookieList.splice(deleteIndex, 1);
    if (this.cookieList.length > 0) {
      this.cookieSelected = this.cookieList[Math.max(deleteIndex - 1,0)];
    }
  }

  ngOnInit() {
  }

}