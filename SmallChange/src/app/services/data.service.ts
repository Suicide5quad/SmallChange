import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import {
//   dummy_data_bonds,
//   dummy_data_mfs,
//   dummy_data_order,
//   dummy_data_stocks,
//   market_bonds,
//   market_stocks,
// } from '..//models/mock-data';
import { BondHolding } from '../models/bond-holding';
// import { MarketAssets } from '../models/market-assets';
import { MfHolding } from '../models/mf-holding';
import { StockHolding } from '../models/stock-holding';
import { UserPortfolio } from '../models/user-portfolio';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private portfolioUrl: string = 'http://localhost:8080/smallchange/portfolio/';
  stocks: StockHolding[] = [];
  mf: MfHolding[] = [];
  bonds: BondHolding[] = [];
  constructor(private http: HttpClient) {
    console.info('Data access service created!');
  }

  getStockHolding(id: string): Observable<StockHolding[]> {
    return this.http.get<StockHolding[]>(
      this.portfolioUrl + id + '?type=Stock'
    );
  }

  getMFHolding(id: string): Observable<MfHolding[]> {
    return this.http.get<MfHolding[]>(this.portfolioUrl + id + '?type=Mf');
  }

  getBondHolding(id: string): Observable<BondHolding[]> {
    return this.http.get<BondHolding[]>(this.portfolioUrl + id + '?type=Bond');
  }

  getPortfolio(id: string): UserPortfolio {
    return new UserPortfolio(
      this.getStockHolding(id),
      this.getBondHolding(id),
      this.getMFHolding(id)
    );
  }

  // getMarketStocks() {
  //   return market_stocks;
  // }

  // getMarketBonds() {
  //   return market_bonds;
  // }

  // getMarketAssets(): MarketAssets {
  //   // we don't have dummy data for market MFs yet
  //   return new MarketAssets(this.getMarketStocks(), this.getMarketBonds(), []);
  // }
}
