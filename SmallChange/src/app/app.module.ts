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
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TradinghistoryComponent } from './tradinghistory/tradinghistory.component';
import { BuyTradeComponent } from './trades/buy-trade/buy-trade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellTradeComponent } from './trades/sell-trade/sell-trade.component';
import { SetInvestmentPreferencesComponent } from './set-investment-preferences/set-investment-preferences.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReusableTableComponent } from './shared/reusable-table/reusable-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReusableTableOverviewComponent } from './shared/reusable-tableoverview/reusable-tableoverview.component';
import { BondTableComponent } from './portfolio/bond-table/bond-table.component';
import { MfTableComponent } from './portfolio/mf-table/mf-table.component';
import { PortfolioDialogComponent } from './portfolio/portfolio-dialog/portfolio-dialog.component';
import { StockTableComponent } from './portfolio/stock-table/stock-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MatRadioModule } from '@angular/material/radio';
import { AgGridModule } from 'ag-grid-angular';
import { DatePipe } from '@angular/common';
import { PhonePipe } from './phone';
import { AccessFailComponent } from './access-fail/access-fail.component';
import { EditComponent } from './edit/edit.component';

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
    PortfolioComponent,
    SetInvestmentPreferencesComponent,
    MainPageComponent,
    SignupPageComponent,
    TradinghistoryComponent,
    BuyTradeComponent,
    SellTradeComponent,
    ReusableTableComponent,
    ReusableTableOverviewComponent,
    BondTableComponent,
    MfTableComponent,
    PortfolioDialogComponent,
    StockTableComponent,
    PortfolioComponent,
    AccessFailComponent,
    EditComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatTooltipModule,
    MatSortModule,
    MatDialogModule,
    MatRadioModule,
    AgGridModule,
  ],
  providers: [DatePipe, PhonePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
