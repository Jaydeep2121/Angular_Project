import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title:string='';
  Content:string='';
  loadedPost:Post[] = [];
  isFetching = false;
  flag:number=0;
  error = null;
  private errorSub:Subscription;
  constructor(private http:HttpClient,private PostSer:PostService){}

  ngOnInit(){
      this.errorSub=this.PostSer.error.subscribe((errorMessage:any)=>{
      this.error=errorMessage;
    });
  }
  onSubmit(postdata:Post,f:NgForm){
    this.PostSer.createAndStrorPost(postdata.title,postdata.content);
    f.reset();
  }
  onClearPost(){
    this.PostSer.deletepost().subscribe(()=>{
      this.loadedPost = [];
    });
  }
  onFetchPost(){
    this.isFetching=true;
    this.PostSer.fetchPosts().subscribe(data=>{
      this.flag=1;
      this.loadedPost=data;
    },error=>{
      this.error = error.error.error;    
      console.log(error);
    });
    this.isFetching=false;
  }
  onHandleErr(){
    this.error=null;
  }
  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }
}
