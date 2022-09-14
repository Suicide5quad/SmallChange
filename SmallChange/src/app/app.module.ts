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

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    PortfolioPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
