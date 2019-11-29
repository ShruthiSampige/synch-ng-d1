import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCurrencyPipe } from './_pipes/my-currency.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaygroundComponent } from './playground/playground.component';
import { PremiumDirective } from './_directives/premium.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyCurrencyPipe,
    NavbarComponent,
    PlaygroundComponent,
    PremiumDirective
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
