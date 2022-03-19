import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title:string='';
  Content:string='';
  constructor(private http:HttpClient){}

  ngOnInit(){
    this.fetchPost();
  }
  onSubmit(postdata:{title:string,content:string},f:NgForm){
    this.http.post(
      'https://my-db-project-e725a-default-rtdb.firebaseio.com/PostData.json',
      postdata
    ).subscribe(responseData=>{
      console.log(responseData);
    });
    f.reset();
  }
  private fetchPost(){
    this.http.get(
      'https://my-db-project-e725a-default-rtdb.firebaseio.com/PostData.json'
    ).pipe(
      map((responseData:any)=>{
        const postArray = [];
        for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
              postArray.push({ ...responseData[key],id:key});
            }          
        }
        return postArray;
      })
    ).subscribe(data=>{
      console.log(data)
    });
  }
}
