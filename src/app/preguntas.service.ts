import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http:HttpClient) { }

    importar(){
      return this.http.get("https://opentdb.com/api.php?amount=10");
    }

}

