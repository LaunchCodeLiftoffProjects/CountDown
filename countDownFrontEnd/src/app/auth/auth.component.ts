import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  // loggedIn = false;
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router){

  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  terms(){
    return 'We own everything about you now';
  }

  onSubmit(form: NgForm){

    // checks to see if form submission is valid
    if (!form.valid){
      return;
    }

    // extracts email and password values from the form data object
    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;
    const passwordConfirm = form.value.passwordConfirm;

    if (passwordConfirm && password !== passwordConfirm){
      this.error = "Passwords do not match";
      return this.error
    }

    // console.log(email);
    // console.log(password);
    // console.log(name);
    // console.log(passwordConfirm);
    // defines authObs data type as the Observable type that will get back the information from our post requests in auth.service
    // it should contain information that looks like the AuthResponse Interface in auth.service
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    // Checks if we are in login mode or sign up mode to determine which post request we will be sending data to
    if (this.isLoginMode){
      // forwards the extracted email and password to the auth.services login method/post request
      authObs = this.authService.login(email, password);
    } else {
      // forwards the extracted email and password to the auth.services signup method/post request
      authObs = this.authService.signup(name, email, password);
    }

    // subscribes to the post response from the post login and signup post requests prepared above
    authObs.subscribe(
      // If post request succeeds and we get the data back
      resData => {
        console.log(resData);
        this.isLoading = false;
        // if login or signup is successful, redirects to /dashboard required importing Router
        this.router.navigate(['/dashboard']);
      },
      // If post request fails this will be the error data we get back
      errorMessage => {
        // console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    // clears form after submission
    form.reset();
  }
}

