import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { MyCurrencyPipe } from './_pipes/my-currency.pipe';

@NgModule({
  declarations: [AppComponent, DummyComponent, MyCurrencyPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
