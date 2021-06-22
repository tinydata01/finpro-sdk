import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FinproSdkModule } from 'finpro-sdk';
import { OnemoneywebSdkModule } from 'onemoneyweb-sdk';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
