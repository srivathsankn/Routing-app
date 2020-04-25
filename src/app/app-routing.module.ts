import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerDetailsComponent } from './follower-details/follower-details.component';
import { FollowerComponent } from './follower/follower.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path :  "",
    component : HomeComponent
  },
   {
    path :  "archives/:year/:month",
    component : ArchiveDetailComponent
  },
  {
    path : "followers/:loginid",
    component : FollowerDetailsComponent
  },
  {
    path : "followers",
    component : FollowerComponent
  },
  {
    path : "posts",
    component : PostsComponent
  },
  {
    path : "**",
    component : NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
