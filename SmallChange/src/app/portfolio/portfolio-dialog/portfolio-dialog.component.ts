import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Portfolio } from 'src/app/models/portfolio';
import { Trade } from 'src/app/models/trade';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TradeService } from 'src/app/trades/trade.service';

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['./portfolio-dialog.component.scss'],
})
export class PortfolioDialogComponent implements OnInit {
  public data = { dialog_type: '', data: {} };

  constructor(public dialog: MatDialog, public tradeServ: TradeService) {}
  public portfolio!: Portfolio[];
  public newTrade!: Trade;
  ngOnInit(): void {}

  goToPlaceBuyTrade() {
    if (this.tradeServ.newTrade.subscribe() != null) {
      this.tradeServ.newTrade.subscribe((res) => {
        this.portfolio = res;
        this.tradeServ
          .getBuyTradeByPortfolio(
            this.portfolio[0],
            '' + this.portfolio[0].user_id,
            '' + this.portfolio[0].portfolio_id
          )
          .subscribe((res1) => {
            this.tradeServ.setTrade2(res1);
          });
      });
    }
    this.dialog.closeAll();
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}
