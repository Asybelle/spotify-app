import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Artist} from "../../../Artist";
import {Album} from "../../../Album";
import {SpotifyService} from "../services/spotify.service";

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: './album.component.html'
  // styleUrls: ['./album/album.component.css']
})
export class AlbumComponent {
  id: string;
  album: Album[];

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute) {
  }

  ngOnInit(){
    console.log(this.album);
    console.log(this.id);
    this._route.params
      .map(params => params['id'])
      .subscribe((id)=> {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
        })
  }
}
