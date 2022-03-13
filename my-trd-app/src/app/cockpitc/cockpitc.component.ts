import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpitc',
  templateUrl: './cockpitc.component.html',
  styleUrls: ['./cockpitc.component.css']
})
export class CockpitcComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ServerName:string, ServerContent:string}>();
  @Output('blpcreated') blurprintCreated = new EventEmitter<{ServerName:string, ServerContent:string}>(); 
  @ViewChild('localRefCont') serverInput:ElementRef;
  newServserName='';
  newServserContent='';
  constructor() { }

  funcLocalRef(Refdata:HTMLInputElement){
    console.log(Refdata.value);
    console.log("refconData",this.serverInput.nativeElement.value);
  }
  onaddServer(){
    this.serverCreated.emit({
      ServerName:this.newServserName,
      ServerContent:this.newServserContent
    });
  }
  onaddBlueServer(){
    this.blurprintCreated.emit({
      ServerName:this.newServserName,
      ServerContent:this.newServserContent
    })
  }
  ngOnInit(): void {
  }

}
