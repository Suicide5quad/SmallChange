import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TradinghistoryComponent } from './tradinghistory/tradinghistory.component';

import { BuyTradeComponent } from './trades/buy-trade/buy-trade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellTradeComponent } from './trades/sell-trade/sell-trade.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    TradinghistoryComponent,
=======
    BuyTradeComponent,
    SellTradeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
>>>>>>> ae83d7139b14b6d12d860b2ed78bab96ea26b8d3
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
