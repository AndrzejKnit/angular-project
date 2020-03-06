import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]= [
    new Recipe('First Recipe', 'First description', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-11-recipe-easy-sheet-pan-nachos%2F2019-10-21_Kitchn89063_Easy-Sheet-Pan-Chicken-Nachos'),
   new Recipe('SecondRecipe', 'Second description', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_950/k%2FPhoto%2FRecipes%2F2019-11-recipe-easy-sheet-pan-nachos%2F2019-10-21_Kitchn89063_Easy-Sheet-Pan-Chicken-Nachos')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
