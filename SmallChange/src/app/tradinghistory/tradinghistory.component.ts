import { Component, OnInit } from '@angular/core';
import { BuyTrade } from '../models/buyTrade';
import { SellTrade } from '../models/sellTrade';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-tradinghistory',
  templateUrl: './tradinghistory.component.html',
  styleUrls: ['./tradinghistory.component.css']
})
export class TradinghistoryComponent implements OnInit {

  public buytrade: BuyTrade[]=[]
  constructor(private historyservice:HistoryService) { }
  getBuyTrade()
  {
    this.historyservice.getBuyTrade().subscribe(data=>this.buytrade=data)
   console.log(this.buytrade);
  }
  selltrade:SellTrade[]=[]
  getSellTrade()
  {
    this.historyservice.getSellTrade().subscribe(data=>this.selltrade=data)
  }

  ngOnInit(): void {
    
  }

}
