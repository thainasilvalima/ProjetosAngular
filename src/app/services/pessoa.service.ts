import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pessoa } from "../model/pessoa";
import {HttpClient} from "@angular/common/http";

const URL = "assets/data/pessoa.json";
@Injectable ({ providedIn: 'root'})

export class PessaService {
  constructor(private http:HttpClient) {}

  salvar(pessoa: Pessoa) {
    console.log ('salvando...')
    console.log (pessoa)
  }

  listar() : Observable<Pessoa[]> {
     return this.http.get <Pessoa[]>(URL)
  }
}
