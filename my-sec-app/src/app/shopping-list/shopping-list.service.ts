import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingListService{
    // ingrdientChange = new EventEmitter<Ingredients[]>();
    ingrdientChange = new Subject<Ingredients[]>();
    private ingredients:Ingredients[] = [
        new Ingredients('Apple',5),
        new Ingredients('Banana',10)
    ];
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredients(ingr:Ingredients){
        this.ingredients.push(ingr);
        this.ingrdientChange.next(this.ingredients.slice());
    }
    addIng_to_shoppingLst(ingr:Ingredients[]){
        this.ingredients.push(...ingr);
        this.ingrdientChange.next(this.ingredients.slice());   
    }
}