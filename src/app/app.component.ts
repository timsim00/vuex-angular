import { Component } from '@angular/core';
import { OtherService } from './store/other';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public otherService: OtherService) {}
}
