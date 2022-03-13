import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { count, interval, map, Observable, Subscriber, Subscription, timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private internalObse:Subscription;
  constructor() { }

  ngOnInit(): void {
    /*
        this.internalObse = interval(1000).subscribe(count=>
        {
          console.log(count);
        });
        ngOnDestroy(){
          this.internalObse.unsubscribe();
        }
    */
        const customInterval = Observable.create((observer:any)=>{
          let cnt=0;
          setInterval(()=>{
            observer.next(cnt);
            if(cnt==2){
              observer.complete();
            }
            if(cnt>3){
              observer.error(new Error("counting is greater than 3!"));
            }
            cnt++;
          },1000);
      });
    /*
        this.internalObse=customInterval.subscribe((data:any)=>{
            console.log(data); 
        },(error:Error)=>{
            console.log(error);
            alert(error);
        },()=>{
            console.log("completed!");
        })
    */  
      this.internalObse=customInterval.pipe(map((data:number)=>{
        return 'Round :'+(data+1)
      })).subscribe((data:any)=>{
          console.log(data); 
      },(error:Error)=>{
          console.log(error);
          alert(error);
      },()=>{
          console.log("completed!");
      })
  }
}