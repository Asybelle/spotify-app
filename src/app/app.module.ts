import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {AboutComponent} from "./about/about.component";
import {SearchComponent} from "./search/search.component";
import {SpotifyService} from "./services/spotify.service";
import {ArtistComponent} from "./artist/artist.component";
import {AlbumComponent} from "./album/album.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    SpotifyService,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
