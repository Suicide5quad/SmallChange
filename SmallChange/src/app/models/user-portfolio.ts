import { Observable } from 'rxjs';
import { BondHolding } from './bond-holding';
import { MfHolding } from './mf-holding';
import { StockHolding } from './stock-holding';

export class UserPortfolio {
  private _stockHoldings!: Observable<StockHolding[]>;
  private _bondHoldings!: Observable<BondHolding[]>;
  private _mfHoldings!: Observable<MfHolding[]>;

  constructor(
    stocks: Observable<StockHolding[]>,
    bonds: Observable<BondHolding[]>,
    mfs: Observable<MfHolding[]>
  ) {
    this.stockHoldings = stocks;
    this.bondHoldings = bonds;
    this.mfHoldings = mfs;
  }

  public get stockHoldings(): Observable<StockHolding[]> {
    return this._stockHoldings;
  }

  public set stockHoldings(value: Observable<StockHolding[]>) {
    this._stockHoldings = value;
  }

  public get bondHoldings(): Observable<BondHolding[]> {
    return this._bondHoldings;
  }

  public set bondHoldings(value: Observable<BondHolding[]>) {
    this._bondHoldings = value;
  }

  public get mfHoldings(): Observable<MfHolding[]> {
    return this._mfHoldings;
  }

  public set mfHoldings(value: Observable<MfHolding[]>) {
    this._mfHoldings = value;
  }
}
