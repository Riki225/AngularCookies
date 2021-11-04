import { Component, OnInit, VERSION } from '@angular/core';
import { Cookie } from './models/cookie.model';
import { SprinkleCookie } from './models/sprinkle.model';
import { Colours } from './models/colours.enum';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public Colours = Colours;
  cookieList: any = [];
  cookieSelected:Cookie;

  ListCookies(){
    console.log('this ',this.cookieList);
  }

  addCookie(newCook:Cookie|SprinkleCookie){
    console.log(newCook);
    this.cookieList.push({...newCook});
    if(this.cookieList.length === 1){
      this.cookieSelected=this.cookieList[0];
    }
  }

  ngOnInit(){
    this.cookieList=[];
    this.cookieSelected=new Cookie('');
  }

}
