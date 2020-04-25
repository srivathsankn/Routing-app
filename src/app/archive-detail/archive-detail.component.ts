import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class ArchiveDetailComponent implements OnInit {
year;
month;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param : ParamMap) =>
      {
        this.year = param.get("year");
        this.month = param.get("month");
      }
    )

  }

  goback()
  {
    this.router.navigate(['']);
  }

}
