import {Component, EventEmitter, Output} from '@angular/core';
import {AboutComponent} from "../about/about.component";
import {SpotifyService} from '../services/spotify.service';
import {FormsModule} from "@angular/forms";
import {Artist} from '../../../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: './search.component.html'
  // styleUrls: ['./navbar.component.css'],
})
export class SearchComponent {
  searchStr:string;
  searchRes: Artist[];
  @Output() clicked = new EventEmitter<string>();

  constructor(private  _spotifyService:SpotifyService){

  }

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr).subscribe(
      res => {
        this.searchRes = res.artists.items;
      }
    );
  }

  onClicked(){
    alert('It worked!');
  }
}
