import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Cookie } from '../../models/cookie.model';
import { SprinkleCookie } from '../../models/sprinkle.model';
import { Colours } from '../../models/colours.enum';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'cookie-list',
  templateUrl: './cookie-list.component.html',
  styleUrls: ['./cookie-list.component.css']
})
export class CookieListComponent implements OnInit {
  @Input() cookieList:any;

  constructor() { }

  ngOnInit() {
  }

}