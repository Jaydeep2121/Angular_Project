import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";

import { catchError, map } from 'rxjs/operators';
import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{
    error = new Subject<string>();
    constructor(private http:HttpClient){}

    createAndStrorPost(title:string,content:string){
        const postData:Post = { title:title,content:content };
        this.http
        .post<{name:string}>(
            'https://my-db-project-e725a-default-rtdb.firebaseio.com/PostData.json',
            postData
        ).subscribe(response=>{
            console.log(response);
        },(error:any)=>{
            this.error.next(error.message);
        });
    }
    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print','pretty');
        searchParams = searchParams.append('custom','key');
        return this.http
        .get<{[key:string]:Post}>(
            'https://my-db-project-e725a-default-rtdb.firebaseio.com/PostData.json',
            {
                headers: new HttpHeaders({'Custom-Header':'hello'}),
                params:searchParams
            }
        ).pipe(
            map((responseData)=>{
            const postArray:Post[] = [];
                for(const key in responseData){
                    if(responseData.hasOwnProperty(key)){
                    postArray.push({ ...responseData[key],id:key});
                    }          
                }
                return postArray;
            })
        )
        catchError(errRes=>{
            return throwError(errRes);
        })
    }
    deletepost(){
        return this.http.delete('https://my-db-project-e725a-default-rtdb.firebaseio.com/PostData.json');
    }
}