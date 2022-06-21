import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { ServiceService } from 'src/app/app-service/service.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  obsMsg:any;
  constructor(private _serv:ServiceService) { }
  ngOnInit(): void {
    //Of
    const obs1= of('Anup','Shekhar','Sharma');
    obs1.subscribe(res=>{
      this._serv.print('elContainer',res)
    });
    const obs2= of({a:'raj',b:'prakash',c:'dharmesh'});
    obs2.subscribe(res=>{
      this.obsMsg=res;
    });

    //from
      //array
    const obs3= from(['Anuj','rakesh','Sharma']);
    obs3.subscribe(res=>{
      this._serv.print('elContainer1',res)
    });

      //promise
    const promise = new Promise((resolve)=>{
      setTimeout(() => {
        resolve('promise resolved...!!');
      }, 3000);
    });
    const obs4= from(promise);
    obs4.subscribe(res=>{
      this._serv.print('elContainer2',res)
    });

    //string
    const obs5= from('welcome');
    obs5.subscribe(res=>{
      this._serv.print('elContainer3',res)
    });
  }
}
