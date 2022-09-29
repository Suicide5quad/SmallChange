import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Prices } from '../models/prices';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TradeService } from './trade.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BuyTrade } from '../models/buyTrade';
import { SellTrade } from '../models/sellTrade';

describe('TradeService', () => {
  let service: TradeService;
  let mockTradePrice: Prices[];
  let httpTestingController: HttpTestingController;
  let url = 'http://localhost:3000/fmts/trades/prices';
  beforeEach(() => {
    mockTradePrice = [
      {
        askPrice: 104.75,
        bidPrice: 104.25,
        priceTimestamp: '21-AUG-19 10.00.01.042000000 AM GMT',
        instrument: {
          instrumentId: 'N123456',
          externalIdType: 'CUSIP',
          externalId: '46625H100',
          categoryId: 'STOCK',
          instrumentDescription: 'JPMorgan Chase & Co. Capital Stock',
          maxQuantity: 1000,
          minQuantity: 1,
        },
      },
      {
        askPrice: 312500,
        bidPrice: 312000,
        priceTimestamp: '21-AUG-19 05.00.00.040000000 AM -05:00',
        instrument: {
          instrumentId: 'N123789',
          externalIdType: 'ISIN',
          externalId: 'US0846707026',
          categoryId: 'STOCK',
          instrumentDescription: 'Berkshire Hathaway Inc. Class A',
          maxQuantity: 10,
          minQuantity: 1,
        },
      },
    ];

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should place a buy trade', inject(
    [TradeService],
    fakeAsync((service: TradeService) => {
      let trade: any;
      const submitObject: BuyTrade = {
        assetClass: 'test',
        security: 'test 1',
        quantity: 10,
        accNumber: 'acc1',
      };
      service.placeBuyTrade(submitObject).subscribe((data) => (trade = data));
      console.log(trade);
      const req = httpTestingController.expectOne('http://localhost:4000/buy');
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('POST');
      // Respond with mock data, causing Observable to resolve.
      req.flush(submitObject);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
      // Cause all Observables to complete and check the results
      tick();
      expect(trade.assetClass).toBe('test');
    })
  ));

  it('should place a sell trade', inject(
    [TradeService],
    fakeAsync((service: TradeService) => {
      let trade: any;
      const submitObject: SellTrade = {
        security: 'test 1',
        quantity: 10,
        accNumber: 'acc1',
      };
      service.placeSellTrade(submitObject).subscribe((data) => (trade = data));
      console.log(trade);
      const req = httpTestingController.expectOne('http://localhost:4000/sell');
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('POST');
      // Respond with mock data, causing Observable to resolve.
      req.flush(submitObject);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
      // Cause all Observables to complete and check the results
      tick();
      expect(trade.security).toBe('test 1');
    })
  ));

  it('should return trade details', inject(
    [TradeService],
    fakeAsync((service: TradeService) => {
      let trade: Prices[] = [];
      service.getTradeDetails().subscribe((data) => (trade = data));
      const req = httpTestingController.expectOne(url);
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockTradePrice);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
      // Cause all Observables to complete and check the results
      tick();
      expect(trade[0].askPrice).toBe(104.75);
    })
  ));

  it('should return a 404 error', fakeAsync(() => {
    let errorResp: HttpErrorResponse;
    let errorReply: string = '';
    // Creating a spy for handleError function
    const errorHandlerSpy = spyOn(service, 'handleError').and.callThrough();
    // Making sure that the request returns an error
    service.getTradeDetails().subscribe({
      next: () => fail('Should not succeed'),
      error: (e) => (errorReply = e),
    });
    // Checking if we are hitting the correct url
    const req = httpTestingController.expectOne(url);
    // Checking if the request made was GET method
    expect(req.request.method).toEqual('GET');
    // Mocking the response
    req.flush('Forced 404', {
      status: 404,
      statusText: 'Not Found',
    });
    httpTestingController.verify();
    tick();
    // Checking if the errorHandler was called
    expect(errorHandlerSpy).toHaveBeenCalled();
    errorResp = errorHandlerSpy.calls.argsFor(0)[0];
    // Checking if the status was 404
    expect(errorResp.status).toBe(404);
  }));
});
