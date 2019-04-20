import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: any ={};
  tracks: any[]=[];
  load:boolean;
  constructor( private router:ActivatedRoute, private spoty:SpotifyService ) {
    this.load = true;
    this.router.params.subscribe( data =>{
      
      console.log(data['id']);
      
        this.spoty.getArtista(data['id'])
        .subscribe( info => {
          
          this.artista = info;
          console.log(this.artista);
          this.load = false;
          //termina de cargar
        })
      
    this.spoty.getTopTracks(data['id'])
    .subscribe(track =>{
      
      this.tracks = track;
      console.log(this.tracks);
    })
        
      
    })

   }

  ngOnInit() {}

}
