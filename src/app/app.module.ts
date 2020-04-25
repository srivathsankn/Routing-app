import { ActivatedRoute } from '@angular/router';
import { PostService } from './posts/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import "@angular/compiler";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FollowerComponent } from './follower/follower.component';
import { FollowerDetailsComponent } from './follower-details/follower-details.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowerComponent,
    FollowerDetailsComponent,
    PostsComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    ArchiveDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
