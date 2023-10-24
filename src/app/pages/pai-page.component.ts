import { Component } from "@angular/core";

@Component({
 selector:'app-pai-page',
 template: ` <h3> Esse é o componente pai criado com rotas filhas criadas </h3> 

 <a [routerLink]= " 'filho1'"> Rota Filho 1 </a> <br/>
 <a [routerLink]= " 'filho2'"> Rota Filho 2 </a> <br/>

 <router-outlet></router-outlet> 
 `
})

export class PaiPageComponent {
    
}