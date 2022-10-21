export class Trade {
  constructor(
    public user_id: number,
    public asset_class: string,
    public security_id: number,
    public qty: number,
    public direction: string,
    public trade_date_time: string
  ) {}
}
