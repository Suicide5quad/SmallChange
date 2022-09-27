import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReusableTableComponent } from './shared/reusable-table/reusable-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReusableTableOverviewComponent  } from './shared/reusable-tableoverview/reusable-tableoverview.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    ReusableTableComponent,
    ReusableTableOverviewComponent,
    BondTableComponent,
    MfTableComponent,
    PortfolioDialogComponent,
    StockTableComponent,
    PortfolioComponent
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule, NgbModule, BrowserAnimationsModule,MatInputModule,
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
    MatDialogModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
