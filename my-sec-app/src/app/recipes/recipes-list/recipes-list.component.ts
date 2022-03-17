import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[];
  /*
    recipes: Recipe[]= [ 
      new Recipe('A test Recipe','the simple test of recipe','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
      new Recipe('Pizza','the simple test of recipe','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*'),
      new Recipe('A test Recipe2','the simple test of recipe','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/bean-recipes-1-580x740.jpg')
    ];
  
  */
  constructor(private reciepservice:RecipeService,
              private router:Router,
              private actRout:ActivatedRoute) { }

  /* 
      onSelectedItem(recpdata:Recipe){
        this.recipeWasSelected.emit(recpdata);
      }
  */
  

  ngOnInit(){
    this.reciepservice.recipeChnaged.subscribe(
      (recip:Recipe[])=>{
        this.recipes=recip;
      }
    );
    this.recipes = this.reciepservice.getRecipe();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.actRout});
  }

}
