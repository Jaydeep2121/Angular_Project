import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  //promise rxjs
  promiseVal:any;
  constructor() { }
  DellAvailable(){
    return false;
  }
  HpAvailable(){
    return true;
  }
  dellLap={
    brand:'Dell',
    color:'black',
    hardDisk:'2 TB'
  }
  hpLap={
    brand:'hp',
    color:'silver',
    hardDisk:'1 TB'
  }
  notAva={
    msg:'not ava in stock',
    status:'failed'
  }
  ngOnInit(): void {
    let buylaptop = new Promise((resolve,reject)=>{
      if(this.DellAvailable()){
        setTimeout(() => {
          resolve(this.dellLap);
        }, 3000);
      }else if(this.HpAvailable()){
        setTimeout(() => {
          resolve(this.hpLap);
        }, 3000);
      }else{
        reject(this.notAva);
      }
    })

    buylaptop.then((res)=>{
      console.log("then call=>",res);
      this.promiseVal=res;
    }).catch((res)=>{
      console.log("catch call=>",res);
      this.promiseVal=res;
    })
  }

}
