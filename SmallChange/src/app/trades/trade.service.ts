import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import {
  BehaviorSubject,
  catchError,
  Observable,
  Subject,
  throwError,
} from 'rxjs';
import { BuyTrade } from '../models/buyTrade';
import { Portfolio } from '../models/portfolio';
import { SellTrade } from '../models/sellTrade';
import { Stock } from '../models/stock';
import { Trade } from '../models/trade';
@Injectable({
  providedIn: 'root',
})
export class TradeService {
  portfolio: any;
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8080/smallchange/stocks';
  private buyTrade = 'http://localhost:8080/smallchange/trade/buy/';
  private buyTradeFromPortfolio = 'http://localhost:8080/smallchange/trade/';
  private sellTrade = 'http://localhost:8080/smallchange/trade/';
  getTradeDetails(): Observable<Stock[]> {
    return this.http.get(this.url).pipe(catchError<any, any>(this.handleError));
  }

  public trade!: any;
  public subject = new Subject<any>();
  private oldTrade = new BehaviorSubject(this.trade);
  newTrade = this.oldTrade.asObservable();
  setTrade(tradeN: any) {
    this.oldTrade.next(tradeN);
  }

  getBuyTradeByPortfolio(
    portfolio: Portfolio,
    user_id: string,
    portfolio_id: string
  ): Observable<any> {
    const body = JSON.stringify(portfolio);
    // console.log(body);
    return this.http
      .get(this.buyTradeFromPortfolio + user_id + '/' + portfolio_id)
      .pipe(catchError<any, any>(this.handleError));
  }
  public data: any;
  public subject1 = new Subject<any>();
  private oldTrade1 = new BehaviorSubject(this.trade);
  newTrade1 = this.oldTrade1.asObservable();
  setTrade2(tradeN: any) {
    this.oldTrade1.next(tradeN);
  }

  placeSellTradeByPortfolio(
    trade: Trade,
    user_id: string,
    portfolio_id: string
  ): Observable<any> {
    //     {
    //       "user_id": 1,
    //       "security_id": 2,
    //       "qty": 30.0,
    //       "asset_class": "GOVT",
    //       "direction": "Sell",
    //       "trade_date_time":"2022-10-02 12:01:05"
    // }
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(trade);
    console.log(body);
    return this.http
      .post(this.sellTrade + user_id + '/' + portfolio_id, body, {
        headers: headers,
      })
      .pipe(catchError<any, any>(this.handleError));
  }
  placeBuyTrade(trade: Trade, user_id: string): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(trade);
    console.log(body);
    return this.http
      .post(this.buyTrade + user_id, body, { headers: headers })
      .pipe(catchError<any, any>(this.handleError));
  }
  placeSellTrade(trade: Trade): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(trade);
    console.log(body);
    return this.http
      .post(this.sellTrade, body, { headers: headers })
      .pipe(catchError<any, any>(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    console.error(
      `Backend returned code ${error.status}, body was : ${error.error}`
    );
    return throwError(() => {
      'Unable to contact service; please try again later.';
    });
  }
}
