import { Component,Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  // m-1 declare recipes:any;
  @Input() recip:Recipe; 
  @Input() index:number;
  // m-1 @Output() itemSelected = new EventEmitter<void>();
  // m-1 constructor(private recipservice:RecipeService) { }

  ngOnInit(): void {
  }
  
  // onSelectedItem(){
  //   this.recipservice.recipeSelected.emit(this.recip);
       // m -1 this.itemSelected.emit();
  // }
}
