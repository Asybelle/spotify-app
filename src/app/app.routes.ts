import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {AboutComponent} from './about/about.component';
import {ArtistComponent} from './artist/artist.component';
import {ModuleWithProviders} from "@angular/core";
import {AlbumComponent} from "./album/album.component";

const routes: Routes = [
  {path:'', component:SearchComponent},
  {path:'about',component: AboutComponent},
  {path:'artist/:id', component:ArtistComponent},
  {path:'album/:id', component:AlbumComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
