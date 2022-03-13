import { Component, 
         OnInit,Input, 
         ViewEncapsulation, 
         OnChanges,  
         SimpleChanges,
         ViewChild,
         ElementRef,
         ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation:ViewEncapsulation.Emulated //default
  // encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges {
 @Input('serv') element:{type:string,name:string,content:string};
 @ViewChild('heading') header:ElementRef;
 @ContentChild('contentpar') par:ElementRef;
  constructor() {
    console.log("Constructor called");
  }
  
  ngOnChanges(change:SimpleChanges){
    console.log("changes called");
    console.log(change);
  }
  
  ngOnInit(): void {
    console.log("ngOnInit called");
    //console.log('Text content of element '+this.par.nativeElement.textContent); Error
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
    console.log('Text content of element :'+this.par.nativeElement.textContent);
    
  }

}
