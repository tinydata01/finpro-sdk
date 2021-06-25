import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpLoaderFactory } from 'finpro-sdk';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomOverlayComponent } from '../app/components/custom-overlay/custom-overlay.component';
import { OnemoneywebSdkComponent } from './onemoneyweb-sdk.component';
import { AahandleComponent } from '../app/pages/aahandle/aahandle.component';
import { AuthenticationComponent } from '../app/pages/authentication/authentication.component';
import { MessagesComponent } from '../app/components/popups/messages/messages.component';
import { ToastComponent } from '../app/components/toast/toast.component';
import { FiSmallCardComponent } from '../app/components/fi-small-card/fi-small-card.component';
import { VerifyMobileNumberComponent } from '../app/components/verify-mobile-number/verify-mobile-number.component';
import { CustomOtpComponent } from '../app/util-components/custom-otp/custom-otp.component';
import { LinkingStepperComponent } from '../app/pages/account-link/linking-stepper/linking-stepper.component';
import { StepperNavComponent } from '../app/pages/account-link/components/stepper-nav/stepper-nav.component';
import { LinkAccountsComponent } from '../app/pages/account-link/components/link-accounts/link-accounts.component';
import { LinkAccountComponent } from '../app/pages/account-link/components/link-account/link-account.component';
import { FilterDropdownComponent } from '../app/pages/account-link/components/filter-dropdown/filter-dropdown.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { DiscoverAccountsComponent } from '../app/pages/account-link/components/discover-accounts/discover-accounts.component';
import { DiscoverAccountComponent } from '../app/pages/account-link/components/discover-account/discover-account.component';
import { FormComponent } from '../app/util-components/form/form.component';
import { FIListComponent } from '../app/pages/account-link/components/fi-list/fi-list.component';
import { HeaderComponent } from '../app/components/header/header.component';
@NgModule({
  declarations: [
    OnemoneywebSdkComponent,
    AahandleComponent,
    HeaderComponent,
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
    LoginComponent,
    CustomOverlayComponent,
    LinkingStepperComponent,
    DiscoverAccountComponent,
    DiscoverAccountsComponent,
    FiSmallCardComponent,
    FIListComponent,
    AuthenticationComponent,
    FormComponent
  ],
  imports: [
    HttpClientModule,
    TranslateModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    OnemoneywebSdkComponent,
    // LinkingStepperComponent,
    // MessagesComponent,
    // ToastComponent,
    // LoginComponent,
    // AuthenticationComponent,
    // FormComponent
  ]
})
export class OnemoneywebSdkModule { }
