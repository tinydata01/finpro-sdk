import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-throbber',
  templateUrl: './throbber.component.html',
  styleUrls: ['./throbber.component.scss']
})
export class ThrobberComponent implements OnInit {
  showThrobber: any = true;
  showMessage: string = '';

  constructor(private loader: LoaderService) { }

  ngOnInit() {
    console.log("in throbber component")
    this.loader.getLoader().subscribe(val => {
      this.showThrobber = val;
      this.showMessage = this.loader.getwebSdkShowMessage();
    });
  }

}
