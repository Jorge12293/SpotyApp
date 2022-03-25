import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _pokemonService:PokemonService
  ) { }

  pokemons:any []=[];

  ngOnInit(): void {
    this._pokemonService.getPokemons();
  }

}
