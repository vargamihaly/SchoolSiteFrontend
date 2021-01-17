import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthService {
  myAppUrl: string;
  myApiUrl: string;
  RegisterUrl: string;
  LoginUrl: string;

  users$: Observable<IUser[]>;
  currentUser!: IUser;
  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://localhost:5001';
    this.myApiUrl = '/api/Auth';
    this.RegisterUrl = '/Register/';
    this.LoginUrl = '/Login';
  }

  async loginUser(givenUserName: string, givenpassword: string) {

    const headers = { 'content-type': 'application/json' }
    let givenUser: IUser = { userName: givenUserName, password: givenpassword, token: "" }
    let userJSON = JSON.stringify(givenUser);
    let errors: HttpErrorResponse | undefined = undefined;

    let userToken = await this.http.post<string>(this.myAppUrl + this.myApiUrl + this.LoginUrl, userJSON, { 'headers': headers })
      .toPromise().catch(error => {
        if (error != undefined) {
          errors = error;
        }
        throw error;
      });

    if (errors != undefined) {
      this.currentUser.userName = givenUserName;
      this.currentUser.token = userToken;
    }
  }

  //TODO implement token check
  isAuthenticated() {
    if (!this.currentUser == undefined) {
      return (this.currentUser.token.length > 1);
    } else {
      return false;
    }
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
