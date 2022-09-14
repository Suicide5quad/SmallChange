import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyTrade } from '../models/buyTrade';
import { SellTrade } from '../models/sellTrade';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http:HttpClient) { }

  getBuyTrade():Observable<BuyTrade[]>{
    return this.http.get<BuyTrade[]>('http://localhost:4000/buy')
  }
  getSellTrade():Observable<SellTrade[]>{
    return this.http.get<SellTrade[]>('http://localhost:4000/sell')
  }

}
