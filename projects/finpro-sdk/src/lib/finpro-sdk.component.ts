import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-finpro-sdk',
  templateUrl: "./finpro-sdk.component.html",
  styleUrls: ["./finpro-sdk.component.scss"]
})
export class FinproSdkComponent implements OnInit {
  isUserLoggedIn: boolean | undefined;
  isLoggedIn: boolean = false;
  companyLogo: any;
  @Output() consentHandle: EventEmitter<any> = new EventEmitter();
  constructor() { }

  consentData(valueEmitted) {
    this.consentHandle.emit(valueEmitted);
  }

  ngOnInit(): void {
    this.companyLogo = "../assets/images/pngs/HDFC-logo.png";
  }

}
