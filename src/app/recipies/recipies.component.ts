import { Component, OnInit } from '@angular/core';
import { Recipe } from '.././recipies/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recapies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
onShow(){
  console.log('test');
}
}
