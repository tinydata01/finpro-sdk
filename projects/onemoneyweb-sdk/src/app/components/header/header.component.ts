import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() companyLogo: any;
  @Input() color = '#005b9f';
  constructor() { }

  ngOnInit(): void {
  }

  logout() { }

}
