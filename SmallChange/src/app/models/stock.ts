export class Stock {
  constructor(
    public security_id: number,
    public security_name: string,
    public security_code: string,
    public min_qty: number,
    public max_qty: number,
    public price: number,
    public asset_class: string,
    public type_of_fund: string
  ) {}
}
