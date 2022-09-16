import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTradesComponent } from './all-trades/all-trades.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PortfolioPageComponent } from './portfolio/portfolio-page/portfolio-page.component';
import { BuyTradeComponent } from './trades/buy-trade/buy-trade.component';

const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'Portfolio', component: PortfolioPageComponent},
  { path: 'Trade', component: AllTradesComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
// export const routingComponents = [HomePageComponent, LoginPageComponent];