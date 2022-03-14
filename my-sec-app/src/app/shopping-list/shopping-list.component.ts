import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[];
  igChangeSub:Subscription;
  /*
    addIngred(data:Ingredients){
      this.ingredients.push(data);
    } 
  */
  constructor(private shlstServ:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shlstServ.getIngredients();
    this.igChangeSub =  this.shlstServ.ingrdientChange.subscribe(
      (ingre:Ingredients[])=>{
        this.ingredients = ingre;
      }
    );
  }
  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }

}