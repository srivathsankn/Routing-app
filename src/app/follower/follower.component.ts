import { Component, OnInit } from '@angular/core';
import { FollowerService } from './follower.service';

@Component({
  selector: 'follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  followers;

  constructor(private service: FollowerService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      response => {
        this.followers = response;
        console.log(response);
      }
    )
  }

}
