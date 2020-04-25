
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from 'src/common/not-found-error';
import { AppError } from 'src/common/app-error';


export interface posttemplate
{
  userid: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService  {
  private url ='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient ) { 
  }

  getPosts() {
    return this.http.get<posttemplate[]>(this.url).pipe(
      catchError( this.handleError)
      );      
  }

  update(post: posttemplate)
  {
    return this.http.patch(this.url + '/' + post.id, post).pipe(
      catchError( this.handleError)
      );  
  }

  delete(id: number)
  {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError(this.handleError) );  
  }

  private handleError( error: Response){
    if (error.status === 404)
    return throwError(new NotFoundError(error));

    return throwError( new AppError(error));
  }

}
