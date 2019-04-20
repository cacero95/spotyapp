import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* con este decorador @Injectable angular va a entender que el
* siguiente servicio se va a poder inyectar cualquier componente
*/
import { map } from 'rxjs/operators'; // rxjs: reactive extensions
// con este operador map voy a poder filtrar toda la informacion, para conseguir
// lo que yo quiero
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  
  constructor(private http:HttpClient) { 
    
  }
  // el final del url ?limit=20 le indica al api cuantos registros voy a necesitar
     /*this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers })
     .subscribe ( data =>{
      console.log(data); // pero esta peticion no va salir bien
      // ya que se necesita configurar los headers
      
    })*/
  
  getQuery( query:string ){      
    /*
    const head = new HttpHeaders({
      Content_Type: 'application/x-www-form-urlencoded'
    })
    let body = {
      grant_type: 'client_credentials',
      client_id: 'c2bedb7428654d99bb5c2701235c0832',
      client_secrent: 'c3fb1b7d5421425d9289c2055f56f1eb'
    };
    let token = this.http.post('https://accounts.spotify.com/api/token',body);
    */
   const url = `https://api.spotify.com/v1/${ query }`;
   const headers = new HttpHeaders({
    'Authorization': `Bearer BQA268DazWCThN-Dy8N0kf5lP2_fuSLXVl_sul1ooGXf0Tpvj00-ntDCGR_fl6JwIN7jES_lWslu_myVSjs`
    });
    return this.http.get(url,{headers});
    
  }
  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map(data =>data['albums'].items));
  }
  getArtistas(search:string){
    return this.getQuery(`search?q=${ search }&type=artist&limit=15`)
    .pipe(map(data =>data['artists'].items));
  }
  getArtista(artista:string){
    return this.getQuery(`artists/${artista}`);
    
  }
  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
    .pipe(map(data =>data['tracks']));
  }
 
}
