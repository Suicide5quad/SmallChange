import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Portfolio } from '../models/portfolio';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let mockUser: Portfolio[];
  let httpTestingController: HttpTestingController;
  let url = 'http://localhost:8080/smallchange/portfolio/';
  beforeEach(async () => {
    mockUser = [
      {
        portfolio_id: 1,
        user_id: 2,
        type_of_fund: 'Stock',
        security_name: 'Apple',
        security_code: 'AAPL',
        buy_price: 20.5,
        last_date_price: 21.4,
        qty: 140.0,
        asset_class: 'GOVT',
      },
      {
        portfolio_id: 14,
        user_id: 2,
        type_of_fund: 'Stock',
        security_name: "Don't know",
        security_code: 'DK',
        buy_price: 10.5,
        last_date_price: 20.5,
        qty: 180.0,
        asset_class: 'SPA',
      },
      {
        portfolio_id: 17,
        user_id: 1,
        type_of_fund: 'Stock',
        security_name: "Don't know",
        security_code: 'DK',
        buy_price: 10.5,
        last_date_price: 20.5,
        qty: 60.0,
        asset_class: 'SPA',
      },
      {
        portfolio_id: 18,
        user_id: 1,
        type_of_fund: 'Stock',
        security_name: 'Apple',
        security_code: 'AAPL',
        buy_price: 11.4,
        last_date_price: 21.4,
        qty: 55.0,
        asset_class: 'GOVT',
      },
    ];
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve portfolio data', inject(
    [DataService],
    fakeAsync((service: DataService) => {
      let portfolio: any;
      service.getPortfolio('1').stockHoldings.subscribe((data) => {
        data = portfolio;
      });
      const req = httpTestingController.expectOne(url + '1?type=Stock');
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockUser);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
      // Cause all Observables to complete and check the results
    })
  ));
  it('should retrieve portfolio data for MfHoldings', inject(
    [DataService],
    fakeAsync((service: DataService) => {
      let portfolio: any;
      service.getPortfolio('1').mfHoldings.subscribe((data) => {
        data = portfolio;
      });
      const req = httpTestingController.expectOne(url + '1?type=Mf');
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockUser);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
      // Cause all Observables to complete and check the results
    })
  ));

  it('should retrieve portfolio data for Bond Holdings', inject(
    [DataService],
    fakeAsync((service: DataService) => {
      let portfolio: any;
      service.getPortfolio('1').bondHoldings.subscribe((data) => {
        data = portfolio;
      });
      const req = httpTestingController.expectOne(url + '1?type=Bond');
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockUser);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
      // Cause all Observables to complete and check the results
    })
  ));
});
