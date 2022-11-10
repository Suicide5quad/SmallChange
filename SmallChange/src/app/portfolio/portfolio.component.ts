import { Component, Input, OnInit } from '@angular/core';
import { UserPortfolio } from 'src/app/models/user-portfolio';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDialogComponent } from './portfolio-dialog/portfolio-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { StockHolding } from '../models/stock-holding';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public userPortfolio!: UserPortfolio;
  public userId: string = '';
  isLoggedIn: boolean = false;
  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public loginServ: LoginService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      if (
        window.localStorage.getItem('currentUser') === this.userId.toString()
      ) {
        this.isLoggedIn = true;
      }
    });
    this.userPortfolio = this.dataService.getPortfolio(this.userId);
  }

  public getUserPortfolio(id: string): UserPortfolio {
    return this.dataService.getPortfolio(id);
  }
  openDialog(data: any) {
    const dialogRef = this.dialog.open(PortfolioDialogComponent);
    dialogRef.componentInstance.data = data;
  }
}
