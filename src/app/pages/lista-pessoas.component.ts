import { Component, OnInit } from "@angular/core";
import { PessaService } from "../services/pessoa.service";
import { Pessoa } from "../model/pessoa";
import { Observable } from "rxjs";

@Component({

  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html'
})

export class ListaPessoaComponent implements OnInit {

  pessoas!: Observable <Pessoa[]>;
  constructor( private service: PessaService) { }

  ngOnInit(){ }

  salvar( pessoa: Pessoa) {
    this.service.salvar(pessoa);

  }

  listar() {
    this.pessoas = this.service.listar();
  }
}
