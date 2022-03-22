import { Component, OnInit } from '@angular/core';
import { dataStorageService } from '../shared/data-strorage.service';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  /*
      @Output() featureSelected = new EventEmitter<string>();

      onSelect(feature:string){
        this.featureSelected.emit(feature);
      }
  */
  
  constructor(private dataSer:dataStorageService) { }
  saveData(){
    this.dataSer.storeRecipes();
  }
  fetchData(){
    this.dataSer.fetchRecipes().subscribe();
  }
}
