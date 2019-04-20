import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  country: any[] = [];
  newReleases: any[] = [];
  load:boolean;
  error:boolean;
  problema:any ={};
  
  /**
   * este constructor funcioan para poder ver todos los paises que hablan español
   * constructor( private http: HttpClient ) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe ( (data:any) =>{
      console.log(data);
      this.country = data;
    })
  } 
   * 
   */
    constructor( private spotify:SpotifyService){
      this.error = false;
      this.load = true;
      this.spotify.getNewReleases()
      .subscribe( data =>{
        //console.log(data.albums.items);
        this.newReleases = data;
        this.load = false;
        console.log(data);
        
      },( warning )=>{
        console.log(warning);
        this.error = true;
        this.problema = warning;
      });
    }
   
  

  ngOnInit() {
  }

}
