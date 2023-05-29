import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
