import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
   
    posts: Post[] = []

   constructor(public postsService: PostsService) {}

   ngOnInit(): void {
       this.posts = this.postsService.getPosts();
        this.postsService.postsUpdatedListener.subscribe(
            (posts: Post[]) => {
                this.posts = posts
            }
        )
   }    
}