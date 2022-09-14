import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BuyTrade } from '../models/buyTrade';
import { Prices } from '../models/prices';
import { SellTrade } from '../models/sellTrade';
@Injectable({
  providedIn: 'root',
})
export class TradeService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/fmts/trades/prices';
  private buyTrade = 'http://localhost:4000/buy';
  private sellTrade = 'http://localhost:4000/sell';
  getTradeDetails(): Observable<Prices[]> {
    return this.http.get(this.url).pipe(catchError<any, any>(this.handleError));
  }
  placeBuyTrade(trade: BuyTrade): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(trade);
    console.log(body);
    return this.http
      .post(this.buyTrade, body, { headers: headers })
      .pipe(catchError<any, any>(this.handleError));
  }
  placeSellTrade(trade: SellTrade): Observable<any> {
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
