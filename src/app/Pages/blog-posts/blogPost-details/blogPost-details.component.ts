
import { BlogService } from 'src/app/Pages/blog-posts/shared/blog.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlogPost } from 'src/app/Pages/blog-posts/shared/blog-post.model';


@Component({
  templateUrl: './blogPost-details.component.html',
  styles: [`
.container {padding-left: 20px; padding-right: 20px;}
`]
})

export class BlogPostDetailsComponent {

  blogPost: IBlogPost;

  constructor(private blogPostService: BlogService, private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    this.blogPost = await this.loadBlogPost();
  }

  loadBlogPost(): Promise<IBlogPost> {
    return this.blogPostService.getOneBlogPost(this.route.snapshot.params.id);
  }
}