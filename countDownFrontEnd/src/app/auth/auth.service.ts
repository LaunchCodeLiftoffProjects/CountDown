import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

import { User } from './user.model';

// defines the format of the information we expect to get back, this will need to be replaced with our backend equivalent
// currently this is what firebase will send back to us
export interface AuthResponseData {
  knd: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  // stores user info
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signup(name: string, email: string, password: string) {
    // currently sending and http post request to firebase, the object is the information it requires for their signup module
    // this will need to be replaced by whatever we are doing with our backend as this is firebase specific
    return this.http.post<AuthResponseData>(
      'https://localhost:5001/api/users/register',
      {
        name: name,
        email: email,
        password: password,
        // returnSecureToken: true
      }
    )
    // .pipe(
    //   // error handling, passing in our handleError method
    //   catchError(this.handleError),
    //   // checks authentication
    //   tap(resData => {
    //     this.handleAuthentication(
    //       resData.email,
    //       resData.localId,
    //       resData.idToken,
    //       +resData.expiresIn
    //     );
    //   })
    // );
  }

  login(email: string, password: string){
    // currently sending and http post request to firebase, the object is the information it requires for their signup module
    // this will need to be replaced by whatever we are doing with our backend as this is firebase specific
    return this.http.post<AuthResponseData>(
      'https://localhost:5001/api/users/login',
      {
        email: email,
        password: password,
        // returnSecureToken: true
      }
    )
    // .pipe(
    //   // error handling, passing in our handleError method
    //   catchError(this.handleError),
    //   // checks authentication
    //   tap(resData => {
    //     this.handleAuthentication(
    //       resData.email,
    //       resData.localId,
    //       resData.idToken,
    //       +resData.expiresIn
    //     );
    //   })
    // );
  }

  // autoLogin() {
  //   const userData: {
  //     name: string;
  //     token: string;
  //     _tokenExpirationDate: string;
  //   } = JSON.parse(localStorage.getItem('userData'));
  //   if (!userData){
  //     return;
  //   }

  //   const loadedUser = new User(
  //     userData.email,
  //     userData.id,
  //     userData._token,
  //     new Date(userData._tokenExpirationDate)
  //     );

  //     if (loadedUser.token){
  //       this.user.next(loadedUser);
  //     }
  // }

  // logout() {
  //   this.user.next(null);
  //   this.router.navigate(['/authentication']);
  // }

  // private handleAuthentication(
  //   email: string,
  //   userId: string,
  //   token: string,
  //   expiresIn: number
  // )  {
  //   // converts the expiresIn into a new Date object that represents the expiry time
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   // creates new user with the info passed in from resData and the expirationDate we just caclulated
  //   const user = new User(email, userId, token, expirationDate);
  //   // makes this our now currently logged in user in the app
  //   this.user.next(user);
  //   // allows you to write an item to local storage, in this case, our user object so our login
  //   // survives browser reloads
  //   localStorage.setItem('userData', JSON.stringify(user));
  // }

  // // Error handling method, will need to make this specific to our backend
  // private handleError(errorRes: HttpErrorResponse){
  //   // creates default error message
  //   let errorMessage = 'An unknown error occurred.';
  //   // checks to see if errors are present
  //   if (!errorRes.error || !errorRes.error.error){
  //     // if no known error is found in the back end data object, we return the default error message
  //     return throwError(errorMessage);
  //   }
  //   // if known errors are found in the back end data object, we check to see which one it is
  //   // and change the errrorMessage variable to the error message we created for each case
  //   switch (errorRes.error.error.message){
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'User already exists';
  //       break;
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'This email is not assigned to a current user.';
  //       break;
  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'This password is not correct.';
  //   }
  //   // returns the error specific message
  //   return throwError(errorMessage);
  // }
}

