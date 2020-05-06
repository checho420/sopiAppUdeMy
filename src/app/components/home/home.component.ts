import { Component } from '@angular/core';
//import { HttpClient } from "@angular/common/http";
import { SpotifyService } from "../../services/spotify.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones :any[] = [];
  loading: boolean;
 
  constructor(private spotify: SpotifyService) {
  
    this.loading = true;

     this.spotify.getNewRelease()
       .subscribe( (data:any) =>{
          console.log(data);
          this.nuevasCanciones = data;    
          this.loading = false;      
       })    


 }

  //paises: any[] = []; 
/*
  constructor( private http : HttpClient ) { 
    console.log('Contructor cargado!'); 
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
     .subscribe( (resp : any) => {
       console.log(resp);
       this.paises = resp;


     });

  }

  */

}
