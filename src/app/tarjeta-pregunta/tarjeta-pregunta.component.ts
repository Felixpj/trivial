import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tarjeta-pregunta',
  templateUrl: './tarjeta-pregunta.component.html',
  styleUrls: ['./tarjeta-pregunta.component.css']
})
export class TarjetaPreguntaComponent implements OnInit {
  @Input() pregunta:any;
  todasRespuestas:any[];
  
  constructor() { }

  ngOnInit() {
    this.todasRespuestas=this.pregunta.incorrect_answers;
    this.todasRespuestas.push(this.pregunta.correct_answer);
    this.todasRespuestas=this.barajarResp(this.todasRespuestas);
  }


  barajarResp(array:any[]){

    var indice = array.length;
     let temporaryValue:number, randomIndex:number;

    // Mientras queden elementos a mezclar...
    while (0 !== indice ) {
  
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * indice);
      indice -= 1;
  
      // E intercambiarlo con el elemento actual
      temporaryValue = array[indice];
      array[indice] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;

    }

  

}
