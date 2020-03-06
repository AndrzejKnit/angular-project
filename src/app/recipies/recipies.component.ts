import { Component, OnInit } from '@angular/core';
import { Recipe } from '.././recipies/recipe.model';

@Component({
  selector: 'app-recapies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
onShow(){
  console.log('test');
}
}
