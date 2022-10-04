import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TradeHistory } from '../models/trade-history';
import { TradeHistoryService } from '../trade-history.service';

@Component({
  selector: 'app-tradinghistory',
  templateUrl: './tradinghistory.component.html',
  styleUrls: ['./tradinghistory.component.css']
})
export class TradinghistoryComponent implements OnInit {

  trades: TradeHistory[] = [];
  dataSource: any;

  displayedColumns: string[] = [
    'name',
    'code',
    'quantity',
    'type',
    'price',
    'asset_class'
  ];

  constructor(private tradeHistoryService: TradeHistoryService) {}

  ngOnInit(): void {
    this.getTrades();
  }

  getTrades() {
    this.tradeHistoryService.getTradeHistory('').subscribe((data) => {
      this.trades = data;
      this.dataSource = new MatTableDataSource(this.trades);
    });
  }
  setToBuy(){
    this.tradeHistoryService.getTradeHistory('buy').subscribe((data) => {
      this.trades = data;
      this.dataSource = new MatTableDataSource(this.trades);
    });
  }
  setToSell(){
    this.tradeHistoryService.getTradeHistory('sell').subscribe((data) => {
      this.trades = data;
      this.dataSource = new MatTableDataSource(this.trades);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
