import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Preferences } from '../models/preferences';

import { PreferencesService } from './preferences.service';

describe('UserService', () => {
  let service: PreferencesService;
  let mockPreference: Preferences[];
  let httpTestingController: HttpTestingController;
  let baseURL = 'http://localhost:8080/smallchange/preferences';
  let baseUserURL = 'http://localhost:8080/smallchange/preferences/user';
  beforeEach(async () => {
    mockPreference = [
      {
        preferenceId: 1,
        userId: 1,
        purpose: 'Growth in portfolio',
        tolerance: 'ABOVE_AVERAGE',
        incomeCategory: 'Rs60K_80K',
        duration: 'Between7Y_10Y',
      },
    ];
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(PreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve preferences data', inject(
    [PreferencesService],
    fakeAsync((service: PreferencesService) => {
      let preference: any;
      service.getPreferenceByPreferenceId(1).subscribe((data) => {
        data = preference;
      });
      const req = httpTestingController.expectOne(baseURL + '/1');
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockPreference);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
    })
  ));

  it('should add new preference', inject(
    [PreferencesService],
    fakeAsync((service: PreferencesService) => {
      let preference: any;
      const submitObject = {
        preferenceId: 1,
        userId: 1,
        purpose: 'Growth in portfolio',
        tolerance: 'ABOVE_AVERAGE',
        incomeCategory: 'Rs60K_80K',
        duration: 'Between7Y_10Y',
      };
      service.addPreference('1', submitObject).subscribe((data) => {
        data = preference;
      });
      const req = httpTestingController.expectOne(baseURL+'/1');
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('POST');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockPreference);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
    })
  ));

  it('should update preference', inject(
    [PreferencesService],
    fakeAsync((service: PreferencesService) => {
      let preference: any;
      const submitObject = {
        preferenceId: 1,
        userId: 1,
        purpose: 'Growth in portfolio',
        tolerance: 'ABOVE_AVERAGE',
        incomeCategory: 'Rs60K_80K',
        duration: 'Between7Y_10Y',
      };
      service
        .updatePreference(submitObject.userId, submitObject)
        .subscribe((data) => {
          data = preference;
        });
      const req = httpTestingController.expectOne(
        baseUserURL + '/' + submitObject.userId
      );
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('PUT');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockPreference);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
    })
  ));
});
