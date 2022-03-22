import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { dataStorageService } from "src/app/shared/data-strorage.service";
import { Recipe } from "../recipes.model";

@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {
    constructor(private dataStrSer:dataStorageService){}
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        return this.dataStrSer.fetchRecipes();
    }
}