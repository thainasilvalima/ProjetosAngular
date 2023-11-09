import { Component, OnInit } from "@angular/core"
import { filter, map, of } from "rxjs";


@Component({
    selector: 'app-operator-exemplo',
    template: `
    
    <div> {{list}}</div> 
    <button (click)="dobrarValores()"> Dobrar valores  </button>
    
    `
})

export class OperatorExemploComponent implements OnInit {

    list: any[] = []
    from = of(1, 2, 3, 4,5,6)

    ngOnInit(): void {
        this.from.subscribe(
            item => {
                this.list.push(item) // coloca cada item no array 
            }
        )
    }

    dobrarValores() {

        this.list = [];
        this.from.pipe(
            map(item => item * 2) // faz o opera;'ao de transformacao

        )
            .subscribe(
                item => {
                    this.list.push(item) // coloca cada item no array
                }
            )
    }

    dobrarEfiltrar() {
        this.list = [];
        this.from.pipe(
            map(item => item * 2), // faz o operacao de transformacao
            filter(item => item <= 6) // filtra os valores pares
        )
            .subscribe(item => {
                this.list.push(item);
            }
        )
    }

}