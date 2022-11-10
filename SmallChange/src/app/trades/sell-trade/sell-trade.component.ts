import { DatePipe } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Prices } from 'src/app/models/prices';
import { SellTrade } from 'src/app/models/sellTrade';
import { Stock } from 'src/app/models/stock';
import { Trade } from 'src/app/models/trade';
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
  quantity: number = 0;
  AccountNumber: string = '';
  portfolioId: string = '';
  public tradePrice: Stock[] = [];
  errorMessage: string = '';
  sellForm!: FormGroup;
  userId: any;
  constructor(
    private tradeServ: TradeService,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    public loginServ: LoginService,
    private router: Router
  ) {}

  public submitObject: Trade | undefined;
  ngOnInit() {
    this.sellForm = new FormGroup({
      security: new FormControl('', [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
    });
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    this.tradeServ.newTrade1.subscribe((res) => {
      // console.log(res);
      this.security = res.portfolioData[0].security_name;
      this.portfolioId = res.portfolioData[0].portfolio_id;
      this.securityId = res.stockData[0].security_id;
      this.assetClass = res.portfolioData[0].asset_class;
    });
  }
  securityId: number = 0;
  getTradesDetails() {
    this.tradeServ.getTradeDetails().subscribe({
      next: (data) => {
        (this.tradePrice = data), (this.errorMessage = '');
      },
      error: (e) => (this.errorMessage = e),
    });
  }
  date!: Date;
  latest_date: string = '';
  onSubmit() {
    this.date = new Date();
    this.latest_date =
      '' + this.datepipe.transform(this.date, 'yyyy-MM-dd HH:mm:ss');
    this.submitted = true;
    this.submitObject = {
      user_id: this.userId,
      asset_class: this.assetClass,
      security_id: this.securityId,
      qty: this.quantity,
      direction: 'Sell',
      trade_date_time: this.latest_date,
    };
    this.tradeServ
      .placeSellTradeByPortfolio(
        this.submitObject,
        this.userId,
        this.portfolioId
      )
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate([`Portfolio`, this.userId]);
        },
      });
  }
}
