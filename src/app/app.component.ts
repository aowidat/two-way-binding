import { Component, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontSizePx = 16;

  constructor(){
    effect( () => {
      console.log("sdsss")
    })
  }
}
