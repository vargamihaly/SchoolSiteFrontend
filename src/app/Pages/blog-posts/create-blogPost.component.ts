import { Component } from '@angular/core';
import { BlogService } from 'src/app/Pages/blog-posts/shared/blog.service';
import { IBlogPost } from 'src/app/Pages/blog-posts/shared/blog-post.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-blogPost.component.html',
  styles: [`
    em{float: right; color:##E05C65;padding-left:10px}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {background-color:#999;}
    .error :-moz-placeholder {background-color:#999;}
    .error ::-moz-placeholder {background-color:#999;}
    .error :ms-input-placeholder {background-color:#999;}
    `]
})

export class CreateBlogPostComponent {
  isDirty: boolean = true;
  blogPost: IBlogPost
  Title: "";
  Content: "";
  IsObsolete: false;

  constructor(private router: Router, private blogPostService: BlogService) {
  }

  async ngOnInit() {
    this.blogPost = await this.blogPostService.getOneBlogPost(1).catch(error => error);
  }

  cancel() {
    this.router.navigate(['/news']);
  }

  async saveBlogPost(formValues) {
    this.router.navigate(['/news']);
  }
}


