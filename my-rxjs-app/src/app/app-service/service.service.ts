import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  print(containerId:string,val:any){
    let el=document.createElement('li');
    el.innerHTML=val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
