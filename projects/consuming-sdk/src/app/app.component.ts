import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consuming-sdk';
  consentHandleData: string = "";
testConsent = '626c12c4-27fc-4ea2-b44f-4b56817cec97'
  constructor() {
  }

  consentData(valueEmitted) {
    this.consentHandleData = valueEmitted;
  }
}
