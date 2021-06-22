import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-onemoneyweb-sdk',
  templateUrl: "./onemoneyweb-sdk.component.html",
  styleUrls: ["./onemoneyweb-sdk.component.scss"]
})
export class OnemoneywebSdkComponent implements OnInit {
  isUserLoggedIn: boolean | undefined;
  isLoggedIn: boolean = false;
  companyLogo: any;
  constructor() { }

  ngOnInit(): void {
    this.companyLogo = "../assets/images/pngs/HDFC-logo.png";
  }

}
