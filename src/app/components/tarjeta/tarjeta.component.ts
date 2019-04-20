import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() items: any[] = [];
  constructor( private router:Router ) { }

  ngOnInit() {
  }
  seleccionar_item( termino: any ){
    console.log(termino);
    let params:string;
    if( termino.type === 'album'){
      params = termino.id;
      //console.log(params);
      
      this.router.navigate(['/artista',params]);  
    }
    else {
      params = termino.id;
      //console.log(params);
      this.router.navigate(['/artista',params]);
    }

    
  }
}
