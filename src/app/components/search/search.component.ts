import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  items: any[] = [];
  load:boolean;
  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }
  buscar(search : string){
    this.load = true;
    this.spotify.getArtistas(search)
    .subscribe( (data:any) =>{
      
      this.items = data;
      this.load = false;
      console.log(this.items);
    });
    
  }

}
