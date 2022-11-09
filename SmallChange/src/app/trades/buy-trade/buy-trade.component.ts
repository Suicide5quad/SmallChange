import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Stock } from 'src/app/models/stock';
import { Trade } from 'src/app/models/trade';
import { TradeService } from '../trade.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { couldStartTrivia } from 'typescript';
import { LoginService } from 'src/app/login.service';

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
  securityId: number = 0;
  Quantity: number = 0;
  AccountNumber: string = '';
  public securities: Stock[] = [];
  errorMessage: string = '';
  submitObject: Trade | undefined;
  date!: Date;
  latest_date: string = '';
  userId: number = 0;
  buyForm!: FormGroup;
  portfolio: any;
  constructor(
    private tradeServ: TradeService,
    private route: ActivatedRoute,
    public datepipe: DatePipe,
    public loginServ: LoginService
  ) {}

  ngOnInit() {
    this.buyForm = new FormGroup({
      assetclass: new FormControl('', [Validators.required]),
      securityName: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    });
    this.getTradesDetails();
    this.getPortfolioDetails();
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
  }

  getPortfolioDetails() {
    this.tradeServ.newTrade1.subscribe((res) => {
      // console.log(res);
      this.assetClass = res.portfolioData[0].asset_class;
      this.security = res.portfolioData[0].security_name;
      // console.log(this.assetClass);
    });
  }
  getTradesDetails() {
    this.tradeServ.getTradeDetails().subscribe({
      next: (data) => {
        (this.securities = data), (this.errorMessage = '');
      },
      error: (e) => (this.errorMessage = e),
    });
  }
  onSubmit() {
    this.date = new Date();
    this.latest_date =
      '' + this.datepipe.transform(this.date, 'yyyy-MM-dd HH:mm:ss');
    for (let security of this.securities) {
      if (security.security_name == this.security) {
        this.securityId = security.security_id;
      }
    }
    this.submitObject = {
      user_id: this.userId,
      asset_class: this.assetClass,
      security_id: this.securityId,
      qty: this.Quantity,
      direction: 'Buy',
      trade_date_time: this.latest_date,
    };
    this.submitted = true;
    console.log(this.submitObject);
    this.tradeServ
      .placeBuyTrade(this.submitObject, '' + this.userId)
      .subscribe({
        next: (data) => {
          console.log(data);
          window.location.href = '/Portfolio/' + this.userId;
        },
      });
  }
}
