import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(): Cocktail[] {
    return [
      new Cocktail('Mojito', 8.5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mojito_004.jpg/1024px-Mojito_004.jpg'),
      new Cocktail('Cosmopolitan', 10, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cosmopolitan_003.jpg/800px-Cosmopolitan_003.jpg'),
    ];
  }
}
