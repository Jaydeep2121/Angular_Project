import { Component,  IterableDiffers,  OnInit, ViewChild } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  /*
    @ViewChild('inputNameRef') inputNmRef:ElementRef;
    @ViewChild('inputAmtRef') inputAmRef:ElementRef;
  */
  @ViewChild('f') form:NgForm;
  subscription:Subscription;
  editMode=false;
  itmNumber:number;
  editItem:Ingredients;
  constructor(private shoppiServ:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppiServ.startEditing.subscribe(
      (index:number)=>{
        this.itmNumber=index;
        this.editMode=true;
        this.editItem=this.shoppiServ.getIngredientsEdit(index);

        this.form.setValue({
          name:this.editItem.name,
          amount:this.editItem.amount
        });
      }
    );
  }

  onSubmit(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredients(value.name,value.amount);
    // const newIngredient = new Ingredients(this.inputNmRef.nativeElement.value,this.inputAmRef.nativeElement.value);
    // this.ingredientAdded.emit(newIngredient);
    if(this.editMode){
        this.shoppiServ.UpdateIngredients(this.itmNumber,newIngredient);
    }else{
        this.shoppiServ.addIngredients(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }
  onClear(){
    this.form.reset();
    this.editMode=false;
  }
  onDelete(){
    this.shoppiServ.DeleteIngredients(this.itmNumber);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }  
}
