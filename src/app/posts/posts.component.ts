import { Component, OnInit } from '@angular/core';
import { posttemplate, PostService } from './post.service';
import { NotFoundError } from 'src/common/not-found-error';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : posttemplate[];
  constructor(private service: PostService) { }
  
  updatePost(posttitle: String, post){
    console.log("Posttitle:");
    console.log(posttitle);      
    console.log("Post:");
    console.log(post);
    post.title = posttitle;
    this.service.update(post).subscribe(response => console.log(response),
    (error : Response) => 
      {
      if (error instanceof NotFoundError)
        alert ('This post is not found')
      else 
        throw error
      })
    
  }   
  
  deletePost(post) {
    let position = this.posts.indexOf(post);
     this.service.delete(post.id).subscribe(
       response => 
       console.log(response),
      ( (error : Response) => {
       if (error instanceof NotFoundError) {
        alert ('post has already been deleted');
       }
       else
       {
        throw error;
       }
  
      })
    );
    this.posts.splice(position, 1);
  }
  
    ngOnInit(): void {
    
      this.service.getPosts().subscribe(response => {
        this.posts = Object.values(response);
        console.log(response);
      }
      //error is handled by global error handler that is overridden by Apperror handler
      );
  
     }
  
}
