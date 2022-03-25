import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private _pokemonService:PokemonService
  ) { }

  pokemons:any []=[];

  ngOnInit(): void {
    this._pokemonService.getPokemon('ditto').subscribe(
      (respo : any) => { 
        console.log(respo.name); 
      },
      (error) => { console.log(error); });
  }
}
