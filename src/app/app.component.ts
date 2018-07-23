import { Component, Input } from '@angular/core';
import { text } from '../../node_modules/@angular/core/src/render3/instructions';
import { InputDecorator } from '../../node_modules/@angular/core/src/metadata/directives';
import { createInput, Type } from '../../node_modules/@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  typeCount = 0;

  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }

  keyCounting($event: KeyboardEvent) {
    const gg: any = $event.target;
    if ($event.key === 'Escape') {
      this.typeCount = 0;
      gg.value = '';
    } else {
      this.typeCount = gg.value.length;
    }
    console.log($event);
  }
}
