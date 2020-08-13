import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Languages
import '@angular/common/locales/global/fr';
import '@angular/common/locales/global/es';
import '@angular/common/locales/global/en';
//Components and pipes
import { AppComponent } from './app.component';
import { CapitalizedPipe } from './pipes/capitalized/capitalized.pipe';
import { SecureUrlPipe } from './pipes/secureUrl/secure-url.pipe';
import { HidePasswordPipe } from './pipes/hidePassword/hidePassword.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    SecureUrlPipe,
    HidePasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
