import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IBlogPost } from './shared/blog-post.model';

@Component({
  selector: 'blogPost-thumbnail',
  template: `
    <div [routerLink]="['/news', blogPost.BlogpostId]" class="well hoverwell thumbnail">
      <h2>{{blogPost.Title}}</h2>
      <div>Dátum: {{blogPost.Date}}</div>
      <h4>{{blogPost.Content}}</h4>
      <button (click)="blogPostDetails(blogPost.BlogpostId)" type="click" class="btn btn-primary">Bővebben</button>
</div>
  `
})

export class BlogPostThumbnailComponent {

  @Input() blogPost: IBlogPost


  constructor(private router: Router) {
  }

  blogPostDetails(id) {
    this.router.navigate(['/news/' + id]);
  }
}