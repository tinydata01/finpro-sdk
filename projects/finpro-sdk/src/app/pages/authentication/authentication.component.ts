import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

import { CommonService } from '../../services/common.service';
import { authenticationData } from '../../constants/user.constant';
import { DataService } from '../../services/data.service';
import { utilService } from '../../services/util.service';
import { routePaths } from '../../constants/routing.constant';
import { environment } from '../../../environments/environment';

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.scss"]
})
export class AuthenticationComponent implements OnInit {
  logo: any
  consentId: any;
  noHeight: boolean;
  @Output() consentHandle: EventEmitter<any> = new EventEmitter();
  showProfileOverlay: boolean = false;
  selectedLanguage: any;
  default: any;
  languages = [{ key: "en", value: "English" },
  { key: "hi", value: "हिंदी" }]
  hideForgotPin: boolean = false;

  showAaHandle: boolean = false;
  @Input() set type(value: any) {
    if (value) {
      if (value == "signup") {
        //  this.formType = 'register';

        this.formLayoutData = false;

      } else if (value == "login") {
        this.formType = 'login'
      }
      else if (value == "aahandle") {
        this.formLayoutData = false;

      }
      else {
        this.formType = 'forgotPin'
      }
      this.formLayoutData = this.autheticationData[this.formType];
    }
  }

  @Input() set consent(value: any) {
    if (value) {
      this.consentId = value;
    }
  }

  formType: any;
  formLayoutData: any;
  showHeaderText: boolean = true;
  showSignupForm: boolean = false;
  autheticationData: any = authenticationData;
  constructor(private router: Router, public commonService: CommonService, private cd: ChangeDetectorRef, private dataService: DataService,
    private utils: utilService) {
    this.router.events.subscribe(res => {
      var currentRoute: string = this.router.url;
      // Form heading based on current route
      if (this.utils.searchString(currentRoute, routePaths.SIGNUP)) {
        // this.formType = 'register';
        this.showSignupForm = true;
        this.showAaHandle = false;
      } else if (this.utils.searchString(currentRoute, routePaths.LOGIN)) {
        this.formType = 'login'
        this.showHeaderText = true;
      }
      else if (this.utils.searchString(currentRoute, routePaths.AAHANDLE)) {
        this.formType = 'aahandle';
        this.showAaHandle = true;
        this.showSignupForm = false;
      } else {
        this.formType = 'forgotPin'
      }
      this.formLayoutData = this.autheticationData[this.formType];
    });

  }

  ngOnInit() {
    this.commonService.formHeading.subscribe(data => {
      this.formLayoutData = this.autheticationData[data];
      this.cd.detectChanges();
    })

    if (environment.library) {
      this.hideForgotPin = true;
      this.noHeight = true;
    }
    this.getlang();
  }

  consentData(valueEmitted) {
    this.consentHandle.emit(valueEmitted);
  }

  showAAHandleFlag(valueEmitted) {
    this.showAaHandle = valueEmitted;
    this.formLayoutData = false;
  }

  signUpFlag(valueEmitted) {
    this.showAaHandle = valueEmitted;
    this.formLayoutData = false;
  }

  navigateToLoginPage() {
    this.router.navigate(['/login'])
  }
  getlang() {
    this.default = this.commonService.getDefaultLanguage()
    //console.log("this.default" + this.default)
    if (this.default == "en") {
      this.selectedLanguage = { key: "en", value: "English" };
    }
    else if (this.default == "hi") {
      this.selectedLanguage = { key: "hi", value: "हिंदी" }
    }
  }

  getAvailableLanguagesMap() {
    return this.commonService.getSupportedLanguagesMap();
  }

  setLanguage(lang) {
    this.selectedLanguage = lang
    this.commonService.setDefaultLanguage(lang.key);
  }

  getDefaultLanguage() {
    return this.commonService.getDefaultLanguage();
  }

  toggleLang(event) {
    this.showProfileOverlay = !this.showProfileOverlay;
    event.stopPropagation();
  }

  outside(event) {
    this.showProfileOverlay = false;
  }


}
