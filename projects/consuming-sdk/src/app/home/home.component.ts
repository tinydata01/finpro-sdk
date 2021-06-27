import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'consuming-sdk';
  consentHandleData: string = "";
// testConsent = '626c12c4-27fc-4ea2-b44f-4b56817cec97'
  constructor() {
  }

  consentData(valueEmitted) {
    this.consentHandleData = valueEmitted;
  }
  
}
