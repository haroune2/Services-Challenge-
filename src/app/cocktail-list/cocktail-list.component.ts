import { Component } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {


  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) {}



  ngOnInit(): void {
    

    this.cocktailService.getCocktails().subscribe(data => {
      this.cocktails = data;
    });
 


  }

  
}
