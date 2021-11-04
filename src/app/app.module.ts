import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { AddCookieComponent } from './components/add-cookie/add-cookie.component';
import { CookieSelectorComponent } from './components/cookie-selector/cookie-selector.component';
import { CookieListComponent } from './components/cookie-list/cookie-list.component';

@NgModule({
  imports:      [ CommonModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, AddCookieComponent, CookieSelectorComponent, CookieListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
