import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

import { User } from './user.model';

// defines the format of the information we expect to get back.
export interface AuthResponseData {
  name: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  // stores user info
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signup(name: string, email: string, password: string) {

    return this.http.post<AuthResponseData>(
      'https://localhost:44345/api/users/register',
      {
        name: name,
        email: email,
        password: password,
      }
    )
    .pipe(
      // error handling, passing in our handleError method
      catchError(this.handleError),
      // checks authentication
      tap(resData => {
        this.handleAuthentication(
          resData.name,
          resData.token,
        );
      })
    );
  }

  login(email: string, password: string){

    return this.http.post<AuthResponseData>(
      'https://localhost:44345/api/users/login',
      {
        email: email,
        password: password,
      }
    )
    .pipe(
      // error handling, passing in our handleError method
      catchError(this.handleError),
      // checks authentication
      tap(resData => {
        this.handleAuthentication(
          resData.name,
          resData.token,
        );
      })
    );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/authentication']);
  }

  private handleAuthentication(name: string, token: string)  {

    // creates new user with the info passed in from resData and the expirationDate we just caclulated
    const user = new User(name, token);
    // makes this our now currently logged in user in the app
    this.user.next(user);
    // allows you to write an item to local storage, in this case, our user object so our login
    // survives browser reloads
    localStorage.setItem('userData', JSON.stringify(user));
  }

  // Error handling method, will need to make this specific to our backend
  private handleError(errorRes: HttpErrorResponse){

    let errorMessage = 'An unknown error occurred.';

    if (errorRes.error) {
      errorMessage = errorRes.error;
    }

    return throwError(errorMessage);
  }
}

