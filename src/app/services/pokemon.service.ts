import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})




export class PokemonService {


  pokemons: []=[];
  urlBusqueda:string="https://pokeapi.co/api/v2/pokemon"
  
  constructor(private http:HttpClient) { }

  getPokemons(){
    let url=this.urlBusqueda;
    return this.http.get(url).subscribe((data: any) => {
      console.log(data.results)

      const resultArray = Object.keys(data.results).map(index => {
        let person = data.results[index];
          console.log(person);
          return person;
      });
      return this.pokemons;
    },
    error => {
      return error;
    });
  } 

  getPokemon(termino:string){
    let query= `/${termino}`;
    let url=this.urlBusqueda+query;

    return this.http.get(url);

    /*
    return this.http.get<any[]>(url).subscribe(data => {
               console.log(data); 
               return data;
           },
           error => {
             return error;
           }
    );*/
  }

  
    /*
    return this.http.get<any[]>(url)
           .subscribe(data => {
              console.log(data);
               return data;
           },
           error => {
             return error;
           }
    );
    */
  
 }
