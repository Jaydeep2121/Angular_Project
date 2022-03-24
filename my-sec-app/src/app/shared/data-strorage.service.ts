import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipes.model';
import { RecipeService } from '../recipes/recipes.service';

@Injectable({
  providedIn: 'root',
})
export class dataStorageService {
  constructor(
    private http: HttpClient,
    private recServ: RecipeService,
    private authSer: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recServ.getRecipe();
    return this.http
      .put(
        'https://recipe-book-db-e4053-default-rtdb.firebaseio.com/RecipeData.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  /*
            fetchRecipes() {
                return this.authSer.user.pipe(
                take(1),
                exhaustMap((user) => {
                    return this.http.get<Recipe[]>(
                    'https://recipe-book-db-e4053-default-rtdb.firebaseio.com/RecipeData.json',
                    {
                        params: new HttpParams().set('auth', user.token),
                    }
                    );
                }),
                map((recipes) => {
                    return recipes.map((recip) => {
                    return {
                        ...recip,
                        Ingredients: recip.ingredient ? recip.ingredient : [],
                    };
                    });
                }),
                tap((recipe) => {
                    this.recServ.setRecipes(recipe);
                })
                );
            }
  */
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-book-db-e4053-default-rtdb.firebaseio.com/RecipeData.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recip) => {
            return {
              ...recip,
              Ingredients: recip.ingredient ? recip.ingredient : [],
            };
          });
        }),
        tap((recipe) => {
          this.recServ.setRecipes(recipe);
        })
      );
  }
}
