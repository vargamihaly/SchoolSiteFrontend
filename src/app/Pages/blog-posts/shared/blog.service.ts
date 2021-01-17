import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { async, Observable, throwError } from 'rxjs';
import { IBlogPost } from './blog-post.model';
import { AuthService } from 'src/app/user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  readonly baseURL = 'https://localhost:5001/api/news';
  myAppUrl: string;
  myApiUrl: string;

  blogPosts$: Observable<IBlogPost[]>;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.myAppUrl = 'https://localhost:5001/';
    this.myApiUrl = 'api/news/';
  }


  getBlogPosts(): Observable<IBlogPost[]> {
    return this.http.get<IBlogPost[]>(this.baseURL).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  async getOneBlogPost(postId: number) {
    let errors: HttpErrorResponse;
    let blogPost = await this.http.get<IBlogPost>(this.myAppUrl + this.myApiUrl + postId).toPromise().catch(error => {
      if (error != undefined) {
        errors = error;
      }
      throw error;
    });

    return blogPost;
  }


  async createBlogPost(title: string, content: string, isObsolete: boolean) {

    let token = "Bearer ".concat(this.authService.currentUser.token);

    const headers = { 'content-type': 'application/json', 'authorization': token }

    let errors: HttpErrorResponse;

    let blogPost = {
      "BlogpostId": 0,
      "Date": new Date(Date.now()),
      "Title": title,
      "Content": content,
      "IsObsolete": isObsolete.valueOf
    }

    let blogPosResponse: IBlogPost = await this.http.post<IBlogPost>(this.myAppUrl + this.myApiUrl, blogPost, { 'headers': headers })
      .toPromise().catch(error => {
        if (error != undefined) {
          errors = error;
        }
        throw error;
      });

    return blogPosResponse;
  }

  async IsBlogPostExist(postId: number) {
    const response = await this.http.get<IBlogPost>(this.myAppUrl + this.myApiUrl + postId).toPromise();
    return response;
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
