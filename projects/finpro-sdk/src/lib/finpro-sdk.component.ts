import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-finpro-sdk',
  templateUrl: "./finpro-sdk.component.html",
  styleUrls: ["./finpro-sdk.component.scss"]
})
export class FinproSdkComponent implements OnInit {
  isUserLoggedIn: boolean | undefined;
  isLoggedIn: boolean = false;
  companyLogo: any;
  constructor() { }

  ngOnInit(): void {
     this.companyLogo = "../assets/images/pngs/HDFC-logo.png";
  }

}
