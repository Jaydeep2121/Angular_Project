import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingListService{
    // ingrdientChange = new EventEmitter<Ingredients[]>();
    ingrdientChange = new Subject<Ingredients[]>();
    startEditing = new Subject<number>();
    private ingredients:Ingredients[] = [
        new Ingredients('Apple',5),
        new Ingredients('Banana',10)
    ];
    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredientsEdit(index:number){
        return this.ingredients[index];
    }
    addIngredients(ingr:Ingredients){
        this.ingredients.push(ingr);
        this.ingrdientChange.next(this.ingredients.slice());
    }
    UpdateIngredients(index:number,ingr:Ingredients){
        this.ingredients[index]=ingr;
        this.ingrdientChange.next(this.ingredients.slice());
    }
    DeleteIngredients(index:number){
        this.ingredients.splice(index,1);
        this.ingrdientChange.next(this.ingredients.slice());
    }
    addIng_to_shoppingLst(ingr:Ingredients[]){
        this.ingredients.push(...ingr);
        this.ingrdientChange.next(this.ingredients.slice());   
    }
}