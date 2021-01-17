import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  myAppUrl: string;
  myApiUrl: string;

  users$: Observable<IUser[]>;
  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://localhost:5001/';
    this.myApiUrl = 'api/Users/';
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.myAppUrl + this.myApiUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  GetOneUser(postId: number): Observable<IUser> {
    return this.http.get<IUser>(this.myAppUrl + this.myApiUrl + postId).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
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
