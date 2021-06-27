import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FinproSdkModule } from 'finpro-sdk';
import { OnemoneywebSdkModule } from 'onemoneyweb-sdk';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FinproSdkModule,
    OnemoneywebSdkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
