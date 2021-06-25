import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomOverlayComponent } from '../app/components/custom-overlay/custom-overlay.component';
import { FiSmallCardComponent } from '../app/components/fi-small-card/fi-small-card.component';
import { MessagesComponent } from '../app/components/popups/messages/messages.component';
import { ToastComponent } from '../app/components/toast/toast.component';
import { VerifyMobileNumberComponent } from '../app/components/verify-mobile-number/verify-mobile-number.component';
import { AahandleComponent } from '../app/pages/aahandle/aahandle.component';
import { FIListComponent } from '../app/pages/account-link/components/fi-list/fi-list.component';
import { FilterDropdownComponent } from '../app/pages/account-link/components/filter-dropdown/filter-dropdown.component';
import { LinkAccountComponent } from '../app/pages/account-link/components/link-account/link-account.component';
import { LinkAccountsComponent } from '../app/pages/account-link/components/link-accounts/link-accounts.component';
import { StepperNavComponent } from '../app/pages/account-link/components/stepper-nav/stepper-nav.component';
import { LinkingStepperComponent } from '../app/pages/account-link/linking-stepper/linking-stepper.component';
import { AuthenticationComponent } from '../app/pages/authentication/authentication.component';
import { LoginComponent } from '../app/pages/login/login.component';
//import { SignupComponent } from '../app/pages/signup/signup.component';
import { CustomOtpComponent } from '../app/util-components/custom-otp/custom-otp.component';
// import { FormComponent } from '../app/util-components/form/form.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FinproSdkComponent } from './finpro-sdk.component';
import { FormComponent } from '../app/util-components/form/form.component';
import { DiscoverAccountComponent } from '../app/pages/account-link/components/discover-account/discover-account.component';
import { DiscoverAccountsComponent } from '../app/pages/account-link/components/discover-accounts/discover-accounts.component';
import { SignupComponent } from '../app/pages/signup/signup.component';
import { HeaderComponent } from '../app/components/header/header.component';

@NgModule({
  declarations: [
    SignupComponent,
    FinproSdkComponent,
    HeaderComponent,
    AahandleComponent,
    AuthenticationComponent,
    MessagesComponent,
    ToastComponent,
    CustomOverlayComponent,
    FiSmallCardComponent,
    VerifyMobileNumberComponent,
    CustomOtpComponent,
    AahandleComponent,
    LinkingStepperComponent,
    StepperNavComponent,
    LinkAccountsComponent,
    LinkAccountComponent,
    FilterDropdownComponent,
    FormComponent,
    LoginComponent,
    CustomOverlayComponent,
    LinkingStepperComponent,
    DiscoverAccountComponent,
    DiscoverAccountsComponent,
    FiSmallCardComponent,
    FIListComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    FinproSdkComponent,
    AuthenticationComponent,
    MessagesComponent,
    ToastComponent,
    FormComponent,
    LoginComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FinproSdkModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}