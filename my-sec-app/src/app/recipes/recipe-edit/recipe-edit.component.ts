import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  RecipeForm:FormGroup;
  constructor(private rout:ActivatedRoute,
              private RecServ:RecipeService,
              private router:Router) { }

  ngOnInit(): void {
     this.rout.params.subscribe(
       (parm:Params)=>{
          this.id = +parm['id'];
          this.editMode=(parm['id']!=null);
          this.initForm();
       }
     )   
  }
  getControls() {
    return (this.RecipeForm.get('ingredient') as FormArray).controls;
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.rout});
  }
  onDeleteControl(idx:number){
    (<FormArray>this.RecipeForm.get('ingredient')).removeAt(idx);
  }
  onMySubmit(){
    const newRecipe = new Recipe(
      this.RecipeForm.value['name'],
      this.RecipeForm.value['description'],
      this.RecipeForm.value['imgPath'],
      this.RecipeForm.value['ingredient']
    );
    if(this.editMode){
        this.RecServ.updateRecipe(this.id,newRecipe);
    }else{
        this.RecServ.addRecipe(newRecipe);
    }
    this.onCancel();
  }
  onAddIngredient(){
    (<FormArray>this.RecipeForm.get('ingredient')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,Validators.required)
      })
    );
  }

  private initForm(){
    let recName = '';
    let recImagePath = '';
    let recipeDescr = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.RecServ.getRecipeForDetail(this.id);
      recName = recipe.name;
      recImagePath = recipe.imgpath;
      recipeDescr = recipe.description;

      if(recipe['ingredient']){
        for(let ingr of recipe.ingredient){
          recipeIngredients.push(
            new FormGroup({
                'name':new FormControl(ingr.name,Validators.required),
                'amount':new FormControl(ingr.amount,[
                  Validators.required,
                  Validators.pattern(/^[1-9][0-9]*$/)
                ])
            })
          );
        }
      }
    }
    this.RecipeForm = new FormGroup({
      'name':new FormControl(recName,Validators.required),
      'imgPath':new FormControl(recImagePath,Validators.required),
      'description':new FormControl(recipeDescr,Validators.required),
      'ingredient':recipeIngredients
    });
  }
}
