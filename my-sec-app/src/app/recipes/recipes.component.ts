import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecip:Recipe;
  
  constructor(private recipservic:RecipeService) { }

  ngOnInit(): void {
    this.recipservic.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecip=recipe;
      }
    );
  }

}
