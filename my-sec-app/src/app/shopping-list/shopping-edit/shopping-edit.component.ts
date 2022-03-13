import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  @ViewChild('inputNameRef') inputNmRef:ElementRef;
  @ViewChild('inputAmtRef') inputAmRef:ElementRef;
  constructor(private shoppiServ:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdded(){
    const newIngredient = new Ingredients(this.inputNmRef.nativeElement.value,this.inputAmRef.nativeElement.value);
    // this.ingredientAdded.emit(newIngredient);
    this.shoppiServ.addIngredients(newIngredient);
  }
  
}
