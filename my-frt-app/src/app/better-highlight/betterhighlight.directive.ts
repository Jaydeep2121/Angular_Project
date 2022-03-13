import { Directive, ElementRef, HostBinding, HostListener,  Input,  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  @HostBinding('style.backgroundColor') bcolor:string=this.defaultColor;

  constructor(private elref:ElementRef,private render:Renderer2) { }

  ngOnInit(){
    this.bcolor = this.defaultColor;
    // this.render.setStyle(this.elref.nativeElement,'background-color','blue');
    this.render.setStyle(this.elref.nativeElement,'color','white');
  }

  @HostListener('mouseenter') mouseover(evndata:Event){
    // this.render.setStyle(this.elref.nativeElement,'background-color','blue');
    this.bcolor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(evndata:Event){
    // this.render.setStyle(this.elref.nativeElement,'background-color','transparent');
    this.bcolor=this.defaultColor;
  }
}
