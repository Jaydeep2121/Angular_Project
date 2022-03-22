import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Recipe } from "../recipes/recipes.model";
import { RecipeService } from "../recipes/recipes.service";
import { Ingredients } from "./ingredient.model";

@Injectable({
    providedIn:'root'
})
export class dataStorageService{
    constructor(private http:HttpClient,private recServ:RecipeService){}
    
    storeRecipes(){
        const recipes = this.recServ.getRecipe();
        return this.http
        .put('https://recipe-book-db-e4053-default-rtdb.firebaseio.com/RecipeData.json',
              recipes
        ).subscribe(response=>{
            console.log(response);
        });
    }
    fetchRecipes(){
        return this.http.get<Recipe[]>(
            'https://recipe-book-db-e4053-default-rtdb.firebaseio.com/RecipeData.json'
        ).pipe(
            map(recipes => {
                return recipes.map(recip=>{
                    return {
                        ...recip,
                        Ingredients:recip.ingredient?recip.ingredient:[]
                    }
                })
            }),
            tap(recipe=>{
                this.recServ.setRecipes(recipe);
            })
        )
    }
}