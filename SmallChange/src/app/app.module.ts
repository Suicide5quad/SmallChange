import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioPageComponent } from './portfolio/portfolio-page/portfolio-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TradinghistoryComponent } from './tradinghistory/tradinghistory.component';
import { BuyTradeComponent } from './trades/buy-trade/buy-trade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellTradeComponent } from './trades/sell-trade/sell-trade.component';
import { SetInvestmentPreferencesComponent } from './set-investment-preferences/set-investment-preferences.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    BuyTradeComponent,
    SellTradeComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PortfolioPageComponent,
    SetInvestmentPreferencesComponent,
    MainPageComponent,
    SignupPageComponent,
    TradinghistoryComponent,
    BuyTradeComponent,
    SellTradeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
