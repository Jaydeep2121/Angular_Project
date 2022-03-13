import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*
      @Output() featureSelected = new EventEmitter<string>();

      onSelect(feature:string){
        this.featureSelected.emit(feature);
      }
  */
  
  constructor() { }

  ngOnInit(): void {
  }

}
