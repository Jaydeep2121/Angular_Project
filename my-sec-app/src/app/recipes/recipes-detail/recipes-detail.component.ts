import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  // @Input() recip:Recipe;
  recip:Recipe;
  id:number;
  constructor(private recService:RecipeService,
              private router:Router,
              private Actroute:ActivatedRoute) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    this.Actroute.params.subscribe(
      (prm:Params)=>{
        this.id=prm['id'];
        this.recip=this.recService.getRecipeForDetail(this.id);
      }
    );
  }

  AddShoppinglist(){
    this.recService.addIngreShoppList(this.recip.ingredient);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.Actroute});
  }

}
