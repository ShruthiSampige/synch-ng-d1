import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCurrencyPipe } from './_pipes/my-currency.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCurrencyPipe,
    NavbarComponent,
    PlaygroundComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
