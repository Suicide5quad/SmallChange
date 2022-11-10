import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { User } from '../models/user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let mockUser: User[];
  let httpTestingController: HttpTestingController;
  let url = 'http://localhost:8080/smallchange/users';
  beforeEach(async () => {
    mockUser = [
      {
        lastName: 'Chandran',
        firstName: 'Karthick',
        emailId: 'karthick@gmail.com',
        dob: new Date(),
        phNo: '123456789',
        balance: 100000.0,
        password: '123456F',
        userId: 2,
      },
      {
        lastName: 'Subramanian',
        firstName: 'Ravi',
        emailId: 'ravi@gmail.com',
        dob: new Date(),
        phNo: '1234567890',
        balance: 100000.0,
        password: '123456F',
        userId: 7,
      },
    ];
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve user data', inject(
    [UserService],
    fakeAsync((service: UserService) => {
      let users: any;
      service.getUserList().subscribe((data) => {
        data = users;
      });
      const req = httpTestingController.expectOne(url);
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockUser);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
    })
  ));

  it('should add new user data', inject(
    [UserService],
    fakeAsync((service: UserService) => {
      let users: any;
      const submitObject = {
        lastName: 'Chandran',
        firstName: 'Karthick',
        emailId: 'karthick@gmail.com',
        dob: new Date(),
        phNo: '123456789',
        balance: 100000.0,
        password: '123456F',
        userId: 2,
      };
      service.createUser(submitObject).subscribe((data) => {
        data = users;
      });
      const req = httpTestingController.expectOne(url);
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('POST');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockUser);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
    })
  ));

  it('should update user data', inject(
    [UserService],
    fakeAsync((service: UserService) => {
      let users: any;
      const submitObject = {
        lastName: 'Chandran',
        firstName: 'Karthick',
        emailId: 'karthick@gmail.com',
        dob: new Date(),
        phNo: '123456789',
        balance: 100000.0,
        password: '123456F',
        userId: 2,
      };
      service
        .updateUser(submitObject.userId, submitObject)
        .subscribe((data) => {
          data = users;
        });
      const req = httpTestingController.expectOne(
        url + '/' + submitObject.userId
      );
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('PUT');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockUser);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
    })
  ));

  it('should update user balance', inject(
    [UserService],
    fakeAsync((service: UserService) => {
      let users: any;
      const submitObject = 5000;
      const userId = 2;
      service.updateBalance(userId, submitObject).subscribe((data) => {
        data = users;
      });
      const req = httpTestingController.expectOne(
        url + '/' + userId + '/balance'
      );
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('PUT');
      // Respond with mock data, causing Observable to resolve.
      req.flush(mockUser);
      // Assert that there are no outstanding requests.
      httpTestingController.verify();
    })
  ));
});
