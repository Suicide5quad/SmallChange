import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { TradeHistory } from '../models/trade-history';
import { TradeHistoryService } from '../trade-history.service';

@Component({
  selector: 'app-tradinghistory',
  templateUrl: './tradinghistory.component.html',
  styleUrls: ['./tradinghistory.component.css'],
})
export class TradinghistoryComponent implements OnInit {
  trades: TradeHistory[] = [];
  dataSource: any;
  userId: any;
  public selected = 'all';
  displayedColumns: string[] = [
    'name',
    'code',
    'quantity',
    'type',
    'price',
    'asset_class',
  ];

  constructor(
    private tradeHistoryService: TradeHistoryService,
    private route: ActivatedRoute,
    public loginServ: LoginService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    this.getTrades();
  }

  getTrades() {
    this.tradeHistoryService
      .getTradeHistory('', this.userId)
      .subscribe((data) => {
        this.trades = data;
        this.dataSource = new MatTableDataSource(this.trades);
      });
  }
  setToBuy() {
    this.tradeHistoryService
      .getTradeHistory('buy', this.userId)
      .subscribe((data) => {
        this.trades = data;
        this.dataSource = new MatTableDataSource(this.trades);
      });
  }
  setToSell() {
    this.tradeHistoryService
      .getTradeHistory('sell', this.userId)
      .subscribe((data) => {
        this.trades = data;
        this.dataSource = new MatTableDataSource(this.trades);
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
