export class BuyTrade {
  constructor(
    public assetClass: string,
    public security: string,
    public quantity: number,
    public accNumber: string
  ) {}
}
