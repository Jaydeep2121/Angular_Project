import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(private eleref:ElementRef){}
  ngOnInit(){
      this.eleref.nativeElement.style.backgroundColor='green';
  }
}
