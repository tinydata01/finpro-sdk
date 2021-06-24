import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consuming-sdk';
  consentHandleData: string = "";

  constructor() {
  }

  consentData(valueEmitted) {
    this.consentHandleData = valueEmitted;
    console.log(this.consentHandleData);
  }
}
