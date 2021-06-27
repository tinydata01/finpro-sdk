import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-onemoneyweb-sdk',
  templateUrl: "./onemoneyweb-sdk.component.html",
  styleUrls: ["./onemoneyweb-sdk.component.scss"]
})
export class OnemoneywebSdkComponent implements OnInit {
  isUserLoggedIn: boolean | undefined;
  isLoggedIn: boolean = false;
  companyLogo: any;
  @Input()
  consentHandle = '';
  constructor() { }

  ngOnInit(): void {
    this.companyLogo = "../assets/images/pngs/HDFC-logo.png";
    localStorage.setItem('consentHandle', this.consentHandle)
  }

}
