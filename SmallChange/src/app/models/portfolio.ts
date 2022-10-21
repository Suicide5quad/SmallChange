export class Portfolio {
  constructor(
    public asset_class: string,
    public buy_price: number,
    public last_date_price: number,
    public portfolio_id: number,
    public qty: number,
    public security_code: string,
    public security_name: string,
    public type_of_fund: string,
    public user_id: number
  ) {}
}
