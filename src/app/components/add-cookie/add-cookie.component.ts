import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Cookie } from '../../models/cookie.model';
import { SprinkleCookie } from '../../models/sprinkle.model';
import { Colours } from '../../models/colours.enum';

@Component({
  selector: 'add-cookie',
  templateUrl: './add-cookie.component.html',
  styleUrls: ['./add-cookie.component.css']
})
export class AddCookieComponent implements OnInit {
  @Output() createEvent = new EventEmitter<Cookie>();
  newCookieType: string;
  newCookieName: string;

  constructor() { }

  newCookie() {
    if (this.newCookieType === 'Cookie') {
      this.createEvent.emit(new Cookie(this.newCookieName));
    } else {
      this.createEvent.emit(new SprinkleCookie(this.newCookieName));
    }
  }

  ngOnInit() {
    this.newCookieType='Cookie';
    this.newCookieName='Cookie';
  }

}