import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AuthGuard } from './services/auth.guard';
import { SetInvestmentPreferencesComponent } from './set-investment-preferences/set-investment-preferences.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { BuyTradeComponent } from './trades/buy-trade/buy-trade.component';
import { SellTradeComponent } from './trades/sell-trade/sell-trade.component';
import { TradinghistoryComponent } from './tradinghistory/tradinghistory.component';

const routes: Routes = [
  { path: 'Starter', component: HomePageComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Activity/:id', component: TradinghistoryComponent },
  { path: 'Portfolio/:id', component: PortfolioComponent },
  { path: 'Preferences/:id', component: SetInvestmentPreferencesComponent },
  { path: 'Home/:id', component: MainPageComponent },
  { path: 'BuyTrade/:id', component: BuyTradeComponent },
  { path: 'SellTrade/:id', component: SellTradeComponent },
  { path: '', redirectTo: '/Starter', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponents = [HomePageComponent, LoginPageComponent];
