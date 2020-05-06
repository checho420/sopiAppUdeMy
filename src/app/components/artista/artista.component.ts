import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any = {};

  loading: boolean;

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) {

      this.loading = true;

    this.router.params.subscribe(params => {

      //console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTrack(params['id']);

    });

  }

  getArtista(id: string) {
    this.spotify.getArtista(id)
      .subscribe(artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      });
  }

  getTopTrack(id: string) {
    this.spotify.getTopTrack(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;

      });
  }

}
