import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PortfolioPageComponent } from './portfolio/portfolio-page/portfolio-page.component';
import { SetInvestmentPreferencesComponent } from './set-investment-preferences/set-investment-preferences.component';
import { BuyTradeComponent } from './trades/buy-trade/buy-trade.component';
import { SellTradeComponent } from './trades/sell-trade/sell-trade.component';

const routes: Routes = [
  { path: 'Starter', component: HomePageComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Portfolio', component: PortfolioPageComponent},
  { path: 'Preferences', component: SetInvestmentPreferencesComponent},
  { path: 'Home', component: MainPageComponent},
  { path: 'BuyTrade', component: BuyTradeComponent},
  { path: 'SellTrade', component: SellTradeComponent},
  { path: '', redirectTo: '/Starter', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
// export const routingComponents = [HomePageComponent, LoginPageComponent];