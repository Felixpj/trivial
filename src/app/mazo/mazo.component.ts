import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../preguntas.service';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-mazo',
  templateUrl: './mazo.component.html',
  styleUrls: ['./mazo.component.css']
})
export class MazoComponent implements OnInit {
  preguntas:any;
  iniciado:boolean;
  constructor( private p:PreguntasService) {
  
   }

  ngOnInit() {
    this.p.importar().subscribe(resultado=>{
      this.iniciado=true;
      this.preguntas=resultado;
      console.log(this.preguntas);
    }, error=>{console.log(error)}
    );

  } 

}
