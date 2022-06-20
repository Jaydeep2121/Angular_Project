import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsMsg='';
  videosubscription!:Subscription;
  constructor() { }

  ngOnInit(): void {
    // const broadCastVideo = interval(1000);
    //timer(delay,interval);
    const broadCastVideo = timer(5000,1000);
    this.videosubscription=broadCastVideo.subscribe(res=>{
      this.obsMsg='video '+res
      if(res>=5){
        this.videosubscription.unsubscribe();
      }
    })
  }
}
