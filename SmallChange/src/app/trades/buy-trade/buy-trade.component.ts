import { Component, OnInit } from '@angular/core';
import { BuyTrade } from 'src/app/models/buyTrade';
import { Prices } from 'src/app/models/prices';
import { TradeService } from '../trade.service';

@Component({
  selector: 'app-buy-trade',
  templateUrl: './buy-trade.component.html',
  styleUrls: ['./buy-trade.component.css'],
})
export class BuyTradeComponent implements OnInit {
  submitted: boolean = false;
  cashPower: boolean = true;
  cashOnHand: boolean = true;
  quantityFlag: boolean = true;
  assetClass: string = '';
  security: string = '';
  Quantity: number = 0;
  AccountNumber: string = '';
  public tradePrice: Prices[] = [];
  errorMessage: string = '';
  submitObject: BuyTrade | undefined;
  constructor(private tradeServ: TradeService) {}

  ngOnInit() {
    this.getTradesDetails();
  }
  getTradesDetails() {
    this.tradeServ.getTradeDetails().subscribe({
      next: (data) => {
        (this.tradePrice = data), (this.errorMessage = '');
      },
      error: (e) => (this.errorMessage = e),
    });
  }
  onSubmit() {
    this.submitObject = {
      assetClass: this.assetClass,
      security: this.security,
      quantity: this.Quantity,
      accNumber: this.AccountNumber,
    };
    this.submitted = true;
    this.tradeServ.placeBuyTrade(this.submitObject).subscribe({
      next: (data) => {
        console.log(data);
        window.location.href = '/Trade';
      },
    });
  }
}
