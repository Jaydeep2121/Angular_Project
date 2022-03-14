import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[]= [ 
        new Recipe(
            'Pasta',
            'this is Ditalini Pasta',
            'https://www.carveyourcraving.com/wp-content/uploads/2019/05/Vegan-Pasta-primavera-with-roasted-vegetables.jpg',
                [
                    new Ingredients('pasta',3),
                    new Ingredients('paneer',2)
                ]
            ),
        new Recipe(
            'Pizza',
            'this is Sicilian Pizza',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*',
                [
                    new Ingredients('cheese',1),
                    new Ingredients('tomato',2)
                ]
            ),
        new Recipe(
            'Burger',
            'this is veg burger',
            'https://ampmstore.in/wp-content/uploads/2018/08/Big-Crunch-Veg-Cheese-Burger_2.jpg',
                [
                    new Ingredients('Egg',1),
                    new Ingredients('black peper',3)
                ]
            )
    ];
    getRecipe(){
        return this.recipes.slice();
    }
    getRecipeForDetail(index:number){
        return this.recipes[index];
    }
    constructor(private slService:ShoppingListService){}
    addIngreShoppList(ingred:Ingredients[]){
        this.slService.addIng_to_shoppingLst(ingred);
    }
}