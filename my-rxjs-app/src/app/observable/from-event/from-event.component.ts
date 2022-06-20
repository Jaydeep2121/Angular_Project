import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { elementAt, fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit ,AfterViewInit{

  @ViewChild('addBtn') addBtn:ElementRef | any
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    let count:any=1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      let data='video'+ count++;
      this.print('elementAdd',data);
      this.print('elementAdd1',data);
    });  
  }
  print(containerId:string,val:any){
    let el=document.createElement('li');
    el.innerHTML=val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
