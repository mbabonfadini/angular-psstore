import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageButtonComponent } from './components/shared/page-button/page-button.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PageListComponent } from './components/shared/page-list/page-list.component';
import { CardComponent } from './components/card/card.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    PageButtonComponent,
    PageListComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    CardLabelComponent,
    CardPricingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
