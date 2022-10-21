import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject!: BehaviorSubject<Login | null>;
  public currentUser!: Observable<Login | null>;

  constructor(private http: HttpClient) {
    // let currUser = localStorage.getItem('currentUser');
    // if (currUser != null) {
    //   this.currentUserSubject = new BehaviorSubject<Login | null>(
    //     JSON.parse(currUser)
    //   );
    // }
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Login | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(`http://localhost:8080/smallchange/users`, {
        username,
        password,
      })
      .pipe(
        map((user: Login) => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
