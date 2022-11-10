import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Login } from './models/login';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthLogin } from './models/auth-login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public isLoggedIn = false;
  constructor(private http: HttpClient, private router: Router) {}
  headers = new HttpHeaders({
    'Content-type': 'application/json',
  });
  login(emailId: String, password: String) {
    const login = new AuthLogin();
    login.emailId = emailId;
    login.password = password;
    return this.http
      .post<Login>('http://localhost:8080/smallchange/users/login', login, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  register(
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    phNo: number,
    dob: string
  ): Observable<Login> {
    const logins = new Login();
    logins.firstName = firstName;
    logins.lastName = lastName;
    logins.emailId = emailId;
    logins.password = password;
    logins.phNo = phNo;
    logins.dob = dob;

    return this.http
      .post<Login>('http://localhost:8080/smallchange/users', logins, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      () => 'Unable to contact service; please try again later.'
    );
  }
}
