import { Component, OnInit, Output } from '@angular/core';
import { Prices } from 'src/app/models/prices';
import { SellTrade } from 'src/app/models/sellTrade';
import { TradeService } from '../trade.service';
@Component({
  selector: 'app-sell-trade',
  templateUrl: './sell-trade.component.html',
  styleUrls: ['./sell-trade.component.css'],
})
export class SellTradeComponent implements OnInit {
  submitted: boolean = false;
  cashPower: boolean = true;
  cashOnHand: boolean = true;
  assetClass: string = '';
  security: string = '';
  Quantity: number = 0;
  AccountNumber: string = '';
  public tradePrice: Prices[] = [];
  errorMessage: string = '';
  constructor(private tradeServ: TradeService) {}

  public submitObject: SellTrade | undefined;
  ngOnInit() {}

  getTradesDetails() {
    this.tradeServ.getTradeDetails().subscribe({
      next: (data) => {
        (this.tradePrice = data), (this.errorMessage = '');
      },
      error: (e) => (this.errorMessage = e),
    });
  }
  onSubmit() {
    this.submitted = true;
    this.submitObject = {
      security: this.security,
      quantity: this.Quantity,
      accNumber: this.AccountNumber,
    };
    this.tradeServ.placeSellTrade(this.submitObject).subscribe({
      next: (data) => {
        console.log(data);
        window.location.href = '/Trade';
      },
    });
  }
}
