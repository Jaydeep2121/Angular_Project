import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { elementAt, fromEvent } from 'rxjs';
import { ServiceService } from 'src/app/app-service/service.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit ,AfterViewInit{

  @ViewChild('addBtn') addBtn:ElementRef | any
  constructor(private _serv:ServiceService) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    let count:any=1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      let data='video'+ count++;
      this._serv.print('elementAdd',data);
      this._serv.print('elementAdd1',data);
    });  
  }
}
