import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_ROUTING} from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

//Servicios
import {PokemonService} from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
