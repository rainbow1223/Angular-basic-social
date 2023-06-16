import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Post } from './post.model'

@Injectable({ providedIn: 'root' })
export class PostsService{
    private posts: Post[] = []
    private postsUpdatedSub = new Subject<Post[]>();
    postsUpdatedListener = this.postsUpdatedSub.asObservable()
    
    getPosts() {
        return [...this.posts]
    }


    addPost(title: string, content: string) {
        const post: Post = {
            title: title,
            content: content
        }
        this.posts.push(post)
        this.postsUpdatedSub.next([...this.posts])
    }
}