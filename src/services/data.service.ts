import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import {  Inject } from '@angular/core';
import { throwError }  from 'rxjs'; 
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/map';


//@Injectable()
export class DataService {
  constructor(private url: string , private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
    //  .map(response => response.json())
      catchError(this.handleError));
  }

  get(id) { 
    return this.http.get(this.url + '/' + id).pipe(
    //  .map(response => response.json())
      catchError(this.handleError));    
  }

 /* getOneFromAll(id ) {
      return this.getAll().subscribe( follower => {
        console.log ("Follower")  ;
        if (follower) 
        {
          let a : [] = follower.valueOf();
          console.log(a);
          a.forEach(g => {
          if (g.id == id) {console.log(g); return g; } 
          else {return null;}
          })
        } 
      })
  }*/


  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      //  .map(response => response.json())
        catchError(this.handleError));    
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(
      //  .map(response => response.json())
        catchError(this.handleError));    
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      //  .map(response => response.json())
        catchError(this.handleError));    
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error));
  
    if (error.status === 404)
      return throwError(new NotFoundError(error));
    
    return throwError(new AppError(error));
  }
}
