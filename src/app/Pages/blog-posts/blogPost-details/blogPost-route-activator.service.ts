import { BlogService } from './../shared/blog.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { IBlogPost } from '../shared/blog-post.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class BlogPostRouteActivator implements CanActivate {

  constructor(private blogPostService: BlogService, private router: Router) {
  }

  async canActivate(route: ActivatedRouteSnapshot) {

    let errors: HttpErrorResponse;
    let isExist = false;

    let blogPost: IBlogPost = await this.blogPostService.IsBlogPostExist(route.params['id']).catch(error => {
      if (error != undefined) {

        errors = error;
      }
      throw error;
    });

    if (blogPost?.BlogpostId > 1) {
      isExist = true;
    }

    if (!isExist)
      this.router.navigate(['/404'])
    return isExist;
  }
}
