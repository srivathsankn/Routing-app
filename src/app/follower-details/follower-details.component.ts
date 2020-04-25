import { PostService } from './../posts/post.service';
import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../follower/follower.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { tap, filter, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

interface fDetail {
login: string,
id: string,
html_url: string,
node_id: string
}

@Component({
  selector: 'follower-details',
  templateUrl: './follower-details.component.html',
  styleUrls: ['./follower-details.component.css']
})
export class FollowerDetailsComponent implements OnInit {
  followerDetail: fDetail
constructor(private route: ActivatedRoute, private service:FollowerService, private router: Router) { }

  ngOnInit() 
  {
    this.route.paramMap.
      subscribe( 
         (param : ParamMap) => 
          {
            var id = param.get("loginid");
            //console.log("id"); console.log(id);
            var followers = this.service.getAll();
            followers.subscribe( data => {
              var d = Object.entries(data);
              d.forEach( s => {
                if (s[1]['id'] == parseInt(id)){
                  this.followerDetail = s[1]; 
                  console.log(this.followerDetail);
                }
              })
            });
          }
        )
   
  }

  goback()
  {
    this.router.navigate(['followers']);
  }

}
