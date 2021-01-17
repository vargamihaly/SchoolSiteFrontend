import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Pages/blog-posts/shared/blog.service';
import { IBlogPost } from 'src/app/Pages/blog-posts/shared/blog-post.model';
import { Router } from '@angular/router';

@Component({
  template: `
  <div>
    <h1> Híreink </h1>
    <hr/>
    <div class="row">
      <div *ngFor="let blogPost of blogPosts" class ="col-md-5">
    <blogPost-thumbnail [blogPost]=blogPost></blogPost-thumbnail>
</div>
</div>
  `
})

export class BlogPostsListComponent implements OnInit {

  blogPosts: IBlogPost[];

  async ngOnInit(): Promise<void> {
    this.blogPosts = await this.loadBlogPosts();
  }

  constructor(private blogService: BlogService,  private router: Router) {
  }

  loadBlogPosts(): Promise<IBlogPost[]> {
    return this.blogService.getBlogPosts().toPromise();
  }

  blogPostDetails(id){
    this.router.navigate(['/news/'+id]);
  }
}
