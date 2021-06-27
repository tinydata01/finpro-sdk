import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {
  bankName: string;
  constructor(private userService:UserService) {
    this.bankName = this.userService.data["bankName"];
   }

  ngOnInit(): void {
  }

}
