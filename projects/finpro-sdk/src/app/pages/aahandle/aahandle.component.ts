import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-aahandle',
  templateUrl: './aahandle.component.html',
  styleUrls: ['./aahandle.component.scss']
})
export class AahandleComponent implements OnInit {
  aahandle: any;
  @Output() signUpFlag: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openSignupForm(aahandle) {
    localStorage.setItem("aaHandle", aahandle);
    this.signUpFlag.emit(false);
    // this.router.navigate(['/signup']);
  }
}
